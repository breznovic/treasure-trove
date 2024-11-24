"use client";

import { Button } from "@/app/components/Button/Button";
import s from "./page.module.css";
import Link from "next/link";
import HeroClassIcon from "@/app/components/HeroClassIcon/HeroClassIcon";
import { useEffect, useState } from "react";
import { HeroClass } from "@/app/utils/types/heroesTypes";
import Parameters from "@/app/components/Parameters/Parameters";

export default function ChooseHero() {
  const [heroesClasses, setHeroesClasses] = useState<HeroClass[]>([]);
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    const fetchHeroesClasses = async () => {
      const response = await fetch("/api/heroes");
      const data = await response.json();
      setHeroesClasses(data);
    };
    fetchHeroesClasses();
  }, []);

  let points = 0;

  return (
    <main className={s.main}>
      <h1>Choose your hero</h1>
      <div className={s.container}>
        {heroesClasses?.map((h, index) => (
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
