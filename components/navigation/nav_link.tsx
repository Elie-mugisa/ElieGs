"use client";
import React from "react";

import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

import { usePathname } from "next/navigation";

type Props = {
  label: string;
  url: Url;
};

export default function Navlinks({ label, url }: Props) {
  const pathName = usePathname();
  // const pathName = ""

  return (
    <Link
      onClick={() => console.log(pathName)}
      href={url}
      className={` text-start link text-xl 
   ${
     pathName === url ? "  relative active_link" : "text-white/70"
   } hover:text-white `}
    >
      {label}
    </Link>
  );
}
