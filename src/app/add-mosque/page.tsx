"use client";
import { useSession } from "next-auth/react";
import React from "react";

import { PageOverlay } from "@/components/overlay/page.overlay";
import { UnAuthenticated } from "@/components/overlay/un.authenticated";

export default function Searches() {
  const session = useSession();

  if (session.status === "loading") {
    return (
      <PageOverlay />
    );
  }
  if(session.status === "unauthenticated") {
    return (
      <UnAuthenticated />
    );
  }
  return <div>{/* Your component content goes here */}</div>;
}
