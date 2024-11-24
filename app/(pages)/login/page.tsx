"use client";

import { Button } from "@/app/components/Button/Button";
import s from "./page.module.css";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { User } from "@/app/utils/types/usersTypes";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className={s.main}>
      <h2>Who are you, stranger?</h2>
      <Image
        src="/login.jpg"
        alt="Login"
        width={500}
        height={550}
        className={s.image}
      />
      <form onSubmit={(e) => e.preventDefault()} className={s.form}>
        <label className={s.label}>
          Username:
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            className={s.input}
          />
        </label>
        <label className={s.label}>
          Email:
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className={s.input}
          />
        </label>
        <label className={s.label}>
          Password:
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className={s.input}
          />
        </label>
        <Link href="/choose-hero">
          <Button type="submit" title="Go to the adventure" />
        </Link>
      </form>
    </div>
  );
}
