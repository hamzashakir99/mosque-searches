"use client";

import React from "react";
import { Button, Container, Typography } from "@mui/material";
import { Google as GoogleIcon } from "@mui/icons-material";
import { useSession } from "next-auth/react";

import { PageOverlay } from "@/components/overlay/page.overlay";

export default function LoginPage() {
  const session = useSession();
  if (session.status === "loading") {
    return <PageOverlay />;
  }
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        height: "100vh",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome Back!
      </Typography>
      <Button variant="contained" color="primary" startIcon={<GoogleIcon />}>
        Login with Google
      </Button>
    </Container>
  );
}
