import { Button } from "@/app/components/Button/Button";
import s from "./page.module.css";
import Link from "next/link";
import HeroClass from "@/app/components/HeroClassIcon/HeroClass";

export type heroClass = {
  id: number;
  title: string;
  bonus: string;
  image: string;
};

const heroesClasses: heroClass[] = [
  {
    id: 1,
    title: "Warrior",
    bonus: "+1 to Strength",
    image: "/warrior.jpg",
  },
  {
    id: 1,
    title: "Warrior",
    bonus: "+1 to Strength",
    image: "/warrior.jpg",
  },
  {
    id: 1,
    title: "Warrior",
    bonus: "+1 to Strength",
    image: "/warrior.jpg",
  },
];
export default function ChooseHero() {
  return (
    <main className={s.main}>
      <h1>Choose your hero</h1>
      <div className={s.container}>
        {heroesClasses.map((h) => (
          <HeroClass
            key={h.id}
            title={h.title}
            bonus={h.bonus}
            image={h.image}
          />
        ))}
      </div>
      <Link href="/town">
        <Button title="Go to the town" />
      </Link>
    </main>
  );
}
