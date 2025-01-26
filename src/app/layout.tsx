import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import "./globals.css";

import ReduxStoreProvider from "../providers/Redux.Providers";
import ThemeProvider from "../providers/Theme.Providers";
import NextAuthProvider from "../providers/Auth.Providers";
import SocketProvider from "../providers/Socket.Provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ReduxStoreProvider>
            <NextAuthProvider>
              <ThemeProvider>
                <SocketProvider>{children}</SocketProvider>
              </ThemeProvider>
            </NextAuthProvider>
          </ReduxStoreProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
