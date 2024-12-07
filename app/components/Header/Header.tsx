"use client";

import React from "react";
import s from "./Header.module.css";
import Link from "next/link";

export const Header = () => {
  return (
    <div className={s.container}>
      <Link href="/">
        <h1>Treasure Trove</h1>
      </Link>
    </div>
  );
};
