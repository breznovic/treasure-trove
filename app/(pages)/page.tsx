"use client";

import s from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/Button/Button";

export default function Home() {
  return (
    <main className={s.main}>
      <Image
        src="/chest.jpg"
        width={800}
        height={550}
        alt="Treasure chest"
        className={s.image}
      />
      <Link href="/login">
        <Button title="Start your journey" />
      </Link>
    </main>
  );
}
