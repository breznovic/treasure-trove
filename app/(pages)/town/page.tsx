"use client";

import { useEffect, useState } from "react";
import s from "./page.module.css";
import { Hero } from "@/app/utils/types/heroesTypes";
import { useSearchParams } from "next/navigation";
import HeroStatus from "@/app/components/HeroStatus/HeroStatus";
import { User } from "@/app/utils/types/usersTypes";

export default function TownPage() {
  const [hero, setHero] = useState<Hero | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");

  useEffect(() => {
    if (userId) {
      const heroString = localStorage.getItem(`hero_${userId}`);
      const userString = localStorage.getItem(`user_${userId}`);

      if (heroString) {
        const hero: Hero = JSON.parse(heroString);
        setHero(hero);
      }

      if (userString) {
        const user: User = JSON.parse(userString);
        setUsername(user.username);
      }
    }
  }, [userId]);

  return (
    <div className={s.main}>
      <h1>Town</h1>
      <div className={s.container}>
        <div className={s.hero}>
          {hero ? (
            <HeroStatus hero={hero} username={username} />
          ) : (
            <p>No hero found.</p>
          )}
        </div>
        <div className={s.content}>Buildings</div>
      </div>
    </div>
  );
}
