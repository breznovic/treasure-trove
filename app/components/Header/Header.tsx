import React from "react";
import s from "./Header.module.css";
import Link from "next/link";

export const Header = () => {
  return (
    <Link href="/">
      <h1 className={s.main}>Treasure Trove</h1>
    </Link>
  );
};
