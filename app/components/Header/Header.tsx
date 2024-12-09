"use client";

import React, { useEffect, useState } from "react";
import s from "./Header.module.css";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useUserStore } from "@/store/users";

export const Header = () => {
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");

  const [username, setUsername] = useState<string | null>(null);
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    if (userId) {
      const user = useUserStore.getState().getUserById(userId);

      if (user) {
        setUsername(user.username);
        setScore(user.currentScore);
      }
    }
  }, [userId]);

  return (
    <div className={s.main}>
      <div className={s.header}>
        <Link href="/">
          <h1>Treasure Trove</h1>
        </Link>
        {userId && (
          <div className={s.userInfo}>
            <div>Score: {score}</div>
          </div>
        )}
      </div>
    </div>
  );
};
