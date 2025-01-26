"use client";

import React, { useState, useEffect, createContext } from "react";
import { io, Socket } from "socket.io-client";
import { useSession } from "next-auth/react";

export const SocketContext = createContext<Socket | null>(null);

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  const {
    data: session,
  } = useSession();
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    if (session && !socket) {
      const newSocket = io({
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000,
        reconnectionAttempts: Infinity,
      });

      setSocket(newSocket);

      const handleBeforeUnload = () => {
        if (!navigator.onLine || !session) {
          // Only disconnect if user is not online or not logged in
          if (newSocket) {
            newSocket.disconnect();
            console.log("Socket disconnected");
          }
        }
      };

      window.addEventListener("beforeunload", handleBeforeUnload);

      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
        handleBeforeUnload();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && socket && !socket.connected) {
        if (session && navigator.onLine) {
          socket.connect();
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);
  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};

export default Providers;
