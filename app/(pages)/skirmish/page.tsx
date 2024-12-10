"use client";

import { useEffect, useState } from "react";
import s from "./page.module.css";
import { Hero } from "@/app/utils/types/heroesTypes";
import { useSearchParams } from "next/navigation";
import { useUserStore } from "@/store/users";
import StatusBar from "@/app/components/StatusBar/StatusBar";
import { Mob } from "@/app/utils/types/mobstypes";
import useMobStore from "@/store/mobs";
import { useHeroStore } from "@/store/hero";

export default function SkirmishPage() {
  const [hero, setHero] = useState<Hero | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [mob, setMob] = useState<Mob | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");

  const getRandomMob = useMobStore((state) => state.getRandomMob);
  const getHeroById = useHeroStore((state) => state.getHeroById);
  const decreaseMobHealth = useMobStore((state) => state.decreaseMobHealth);
  const mobs = useMobStore((state) => state.mobs);
  const getNextMob = useMobStore((state) => state.getNextMob);

  useEffect(() => {
    const storedMob = localStorage.getItem("currentMob");
    if (storedMob) {
      setMob(JSON.parse(storedMob));
    } else {
      const newMob = getRandomMob();
      if (newMob) {
        setMob(newMob);
        localStorage.setItem("currentMob", JSON.stringify(newMob));
      }
    }
  }, [getRandomMob]);

  useEffect(() => {
    if (userId) {
      const hero = getHeroById(userId);
      const user = useUserStore.getState().getUserById(userId);

      if (hero) {
        setHero(hero);
      }

      if (user) {
        setUsername(user.username);
      }
    }
  }, [userId, getHeroById]);

  useEffect(() => {
    if (mob) {
      const updatedMob = mobs.find((m) => m.id === mob.id);
      if (updatedMob) {
        setMob(updatedMob);
      }

      if (updatedMob && updatedMob.HP <= 0) {
        const deadMob = {
          ...mob,
          isDead: true,
          imageUrl: "/dead.png",
        };
        setMob(deadMob);
        setNotification(`You kill ${deadMob.title}`);

        setTimeout(() => {
          const newMob = getNextMob();
          setMob(newMob);
          setNotification(null);
        }, 1000);
      }
    }
  }, [mobs, mob, getNextMob]);

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
        {notification ? notification : `You meet ${mob?.title}`}
      </div>
      <button
        className={s.button}
        onClick={() => decreaseMobHealth(mob?.id, 5)}
      >
        Attack!
      </button>
    </div>
  );
}
