"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import logo from "../../public/ms-high-resolution-logo.png";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/searches");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: 1,
      }}
      maxWidth="md"
    >
      <Image src={logo} alt="Logo" width={200} height={200} />
      <Box>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Welcome to Mosque Searches
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" align="center">
          Your journey to find the nearest mosque starts here.
        </Typography>
      </Box>
    </Container>
  );
}
