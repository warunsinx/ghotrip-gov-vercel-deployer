import React from "react";
import { ConnectKitButton } from "connectkit";
import GhotelLogo from "./svgs/GhotelLogo";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="flex items-center w-full h-20 bg-white px-[150px] justify-between border-b">
      <div className="cursor-pointer" onClick={() => router.replace("/")}>
        <GhotelLogo />
      </div>
      <ConnectKitButton mode="light" />
    </div>
  );
}