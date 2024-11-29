"use client";

import { Button } from "@/app/components/Button/Button";
import s from "./page.module.css";
import Link from "next/link";
import HeroClassIcon from "@/app/components/HeroClassIcon/HeroClassIcon";
import { useState } from "react";
import Parameters from "@/app/components/Parameters/Parameters";
import { heroesClasses } from "@/app/utils/constants";
import { useUserStore } from "@/lib/store";

export default function ChooseHero() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const users = useUserStore((state) => state.users);

  let points = 0;

  return (
    <main className={s.main}>
      <h1>Choose your hero</h1>
      <div className={s.container}>
        {heroesClasses.map((h) => (
          <HeroClassIcon
            key={h.id}
            title={h.title}
            bonus={h.bonus}
            imageUrl={h.imageUrl}
            isActive={activeId === h.id}
            onClick={() => setActiveId(h.id === activeId ? null : h.id)}
          />
        ))}
      </div>
      {JSON.stringify(users, null, 2)}
      {activeId && (
        <div className={s.parameters}>
          <h2>Distribute the parameters</h2>
          <div className={s.points}>Avalaible points: {points} </div>
          <Parameters />
        </div>
      )}
      {points === 0 && (
        <Link href="/town">
          <Button title="Go to the town" />
        </Link>
      )}
    </main>
  );
}
