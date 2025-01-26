"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { PageOverlay } from "@/components/overlay/page.overlay";

export default function Searches() {
  const session = useSession();
  if (session.status === "loading") {
    return (
      <PageOverlay />
    );
  }

  return <div>{/* Your component content goes here */}</div>;
}
