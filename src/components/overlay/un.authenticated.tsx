"use client";

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export const UnAuthenticated = () => {
  const router = useRouter();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={1}
      height={"100vh"}
    >
      <Typography variant="h6" color="error">
        You are not authenticated.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => router.push("/login")}>
        Back to Login
      </Button>
    </Box>
  );
};
