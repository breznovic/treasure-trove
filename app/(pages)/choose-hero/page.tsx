"use client";

import { Button } from "@/app/components/Button/Button";
import s from "./page.module.css";
import Link from "next/link";
import HeroClassIcon from "@/app/components/HeroClassIcon/HeroClassIcon";
import { useEffect, useState } from "react";
import Parameters from "@/app/components/Parameters/Parameters";
import { heroesClasses } from "@/app/utils/constants";
import { useSearchParams } from "next/navigation";
import { useUserStore } from "@/store/users";
import { Hero, HeroParameter } from "@/app/utils/types/heroesTypes";
import { v4 as uuidv4 } from "uuid";

export default function ChooseHero() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [points, setPoints] = useState(3);
  const [parameters, setParameters] = useState<HeroParameter[]>([]);
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");
  const createHero = useUserStore((state) => state.createHero);

  useEffect(() => {
    if (!userId) {
      console.error("User id is missing");
    }
  }, [userId]);

  const handleCreateHero = () => {
    if (activeId !== null && userId) {
      const selectedHeroClass = heroesClasses.find((h) => h.id === activeId);
      if (selectedHeroClass) {
        const enduranceParameter = parameters.find(
          (param) => param.title === "endurance"
        );
        if (!enduranceParameter) {
          console.error("Endurance parameter is missing");
          return;
        }

        const calculatedHP = 10 + enduranceParameter.value * 2;

        const newHero: Hero = {
          id: uuidv4(),
          class: selectedHeroClass,
          imageUrl: selectedHeroClass.imageUrl,
          parameters: parameters,
          level: 1,
          HP: calculatedHP,
          maxHP: calculatedHP,
          XP: 0,
          xpToLevel: 10,
          points: 0,
        };
        createHero(userId, newHero);
        localStorage.setItem(`hero_${userId}`, JSON.stringify(newHero));
        const userData = {
          id: userId,
        };
        localStorage.setItem(`user_${userId}`, JSON.stringify(userData));
      }
    }
  };

  const handleParametersChange = (newParameters: HeroParameter[]) => {
    setParameters(newParameters);
  };

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
      {activeId && (
        <div className={s.parameters}>
          <h2>Distribute the parameters</h2>
          <div className={s.points}>Avalaible points: {points} </div>
          <Parameters
            points={points}
            setPoints={setPoints}
            bonus={heroesClasses.find((h) => h.id === activeId)?.bonus}
            onParametersChange={handleParametersChange}
          />
        </div>
      )}
      {points === 0 && (
        <Link href={`/town?userId=${userId}`}>
          <Button title="Go to the town" onClick={handleCreateHero} />
        </Link>
      )}
    </main>
  );
}
