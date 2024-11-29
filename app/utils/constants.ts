import { HeroClass, HeroParameter } from "@/app/utils/types/heroesTypes";

export const heroesClasses: HeroClass[] = [
  { id: 1, title: "Warrior", bonus: "+1 to Strength", imageUrl: "/knight.png" },

  { id: 2, title: "Ranger", bonus: "+1 to Dexterity", imageUrl: "/ranger.png" },

  { id: 3, title: "Rogue", bonus: "+1 to Luck", imageUrl: "/rogue.png" },
];

export const parameters: HeroParameter[] = [
  { id: 1, title: "Strength", value: 0 },
  { id: 2, title: "Endurance", value: 0 },
  { id: 3, title: "Dexterity", value: 0 },
  { id: 4, title: "Intelligence", value: 0 },
  { id: 5, title: "Charisma", value: 0 },
  { id: 6, title: "Luck", value: 0 },
];
