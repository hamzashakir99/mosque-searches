"use client";

import React from "react";
import { Skeleton, Box } from "@mui/material";

export const PageOverlay = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} gap={1} mt={2}>
      <Skeleton variant="rectangular" width="100%" height={40} />
      <Skeleton variant="rectangular" width="100%" height={400} />
      <Skeleton variant="rectangular" width="100%" height={40} />
    </Box>
  );
};
