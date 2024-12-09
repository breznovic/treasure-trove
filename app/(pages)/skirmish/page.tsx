"use client";

import { useEffect, useState } from "react";
import s from "./page.module.css";
import { Hero } from "@/app/utils/types/heroesTypes";
import { useSearchParams } from "next/navigation";
import { useUserStore } from "@/store/users";
import StatusBar from "@/app/components/StatusBar/StatusBar";
import { Mob } from "@/app/utils/types/mobstypes";
import useMobStore from "@/store/mobs";

export default function SkirmishPage() {
  const [hero, setHero] = useState<Hero | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [mob, setMob] = useState<Mob | null>(null);
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");

  const randomMob = useMobStore((state) => state.getRandomMob());

  useEffect(() => {
    if (randomMob) {
      setMob(randomMob);
    }
  }, [randomMob]);

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

  let notification = null;

  return (
    <div className={s.main}>
      <h1>Dungeon</h1>
      <div className={s.container}>
        <div className={s.hero}>
          {hero ? (
            <StatusBar hero={hero} username={username} />
          ) : (
            <p>No hero found.</p>
          )}
        </div>
        <div className={s.mob}>
          {mob ? <StatusBar mob={mob} /> : <p>Anyone not found here.</p>}
        </div>
      </div>
      <div className={s.notification}>
        {notification ? notification : `"You meet ${mob?.title}"`}
      </div>
      <button className={s.button}>Attack!</button>
    </div>
  );
}
