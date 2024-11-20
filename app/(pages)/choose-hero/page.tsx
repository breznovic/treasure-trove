"use client";

import { Button } from "@/app/components/Button/Button";
import s from "./page.module.css";
import Link from "next/link";
import HeroClassIcon from "@/app/components/HeroClassIcon/HeroClassIcon";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db/heroes/db";
import { useState } from "react";

export default function ChooseHero() {
  const heroesClasses = useLiveQuery(() => db.heroesClasses.toArray());

  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <main className={s.main}>
      <h1>Choose your hero</h1>
      <div className={s.container}>
        {heroesClasses?.map((h, index) => (
          <HeroClassIcon
            key={h.id}
            title={h.title}
            bonus={h.bonus}
            image={h.image}
            isActive={activeId === h.id}
            onClick={() => setActiveId(h.id === activeId ? null : h.id)}
          />
        ))}
      </div>
      <Link href="/town">
        <Button title="Go to the town" />
      </Link>
    </main>
  );
}
