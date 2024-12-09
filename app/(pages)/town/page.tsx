"use client";

import { useEffect, useState } from "react";
import s from "./page.module.css";
import { Hero } from "@/app/utils/types/heroesTypes";
import { useRouter, useSearchParams } from "next/navigation";
import HeroStatus from "@/app/components/StatusBar/StatusBar";
import { useUserStore } from "@/store/users";
import clsx from "clsx";

export default function TownPage() {
  const [hero, setHero] = useState<Hero | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");

  const router = useRouter();

  useEffect(() => {
    if (userId) {
      const heroString = localStorage.getItem(`hero_${userId}`);

      const user = useUserStore.getState().getUserById(userId);

      if (heroString) {
        const hero: Hero = JSON.parse(heroString);
        setHero(hero);
      }

      if (user) {
        setUsername(user.username);
      }
    }
  }, [userId]);

  const toSkirmish = () => {
    if (userId) {
      router.push(`/skirmish?userId=${userId}`);
    }
  };

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
        <div className={s.buildings}>
          <div className={s.building}>
            <img
              src="/dungeon.png"
              alt="Door to the dungeon"
              className={s.image}
            />
            <button className={s.button} onClick={toSkirmish}>
              Go to the dungeon
            </button>
          </div>
          <div className={s.building}>
            <img src="/tavern.png" alt="Tavern" className={s.image} />
            <button className={clsx(s.button, s.disabled)} disabled>
              Closed before release
            </button>
          </div>
          <div className={s.building}>
            <img src="/blacksmith.png" alt="Blacksmith" className={s.image} />

            <button className={clsx(s.button, s.disabled)} disabled>
              Closed before release
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
