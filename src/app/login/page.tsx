"use client";

import React, { useState } from "react";
import { Backdrop, Button, CircularProgress, Container, Typography } from "@mui/material";
import { Google as GoogleIcon } from "@mui/icons-material";
import { signIn, useSession } from "next-auth/react";

import { PageOverlay } from "@/components/overlay/page.overlay";

export default function LoginPage() {
  const [open, setOpen] = useState(false);
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
      <Backdrop sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Typography variant="h4" gutterBottom>
        Welcome Back!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<GoogleIcon />}
        onClick={() => {
          setOpen(true);
          signIn("google");
        }}
      >
        Login with Google
      </Button>
    </Container>
  );
}
