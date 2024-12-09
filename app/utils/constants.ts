import { HeroClass, Parameter } from "@/app/utils/types/heroesTypes";
import { Mob } from "./types/mobstypes";

export const heroesClasses: HeroClass[] = [
  { id: 1, title: "Warrior", bonus: "+1 to Strength", imageUrl: "/knight.png" },

  { id: 2, title: "Ranger", bonus: "+1 to Dexterity", imageUrl: "/ranger.png" },

  { id: 3, title: "Rogue", bonus: "+1 to Luck", imageUrl: "/rogue.png" },
];

export const parameters: Parameter[] = [
  { id: 1, title: "Strength", value: 0 },
  { id: 2, title: "Endurance", value: 0 },
  { id: 3, title: "Dexterity", value: 0 },
  { id: 4, title: "Intelligence", value: 0 },
  { id: 5, title: "Charisma", value: 0 },
  { id: 6, title: "Luck", value: 0 },
];

const mobsHP = parameters[1].value * 2;

export const mobs: Mob[] = [
  {
    id: 1,
    title: "Goblin",
    imageUrl: "/goblin.png",
    parameters: [
      { title: "Strength", value: 1 },
      { title: "Endurance", value: 0 },
      { title: "Dexterity", value: 2 },
      { title: "Intelligence", value: 0 },
      { title: "Charisma", value: 0 },
      { title: "Luck", value: 1 },
    ],
    level: 1,
    HP: 10 + mobsHP,
    maxHP: 10 + mobsHP,
    scorePoints: 5,
  },
  {
    id: 2,
    title: "Orc",
    imageUrl: "/orc.png",
    parameters: [
      { title: "Strength", value: 2 },
      { title: "Endurance", value: 1 },
      { title: "Dexterity", value: 1 },
      { title: "Intelligence", value: 0 },
      { title: "Charisma", value: 0 },
      { title: "Luck", value: 0 },
    ],
    level: 1,
    HP: 10 + mobsHP,
    maxHP: 10 + mobsHP,
    scorePoints: 10,
  },
  {
    id: 3,
    title: "Ogre",
    imageUrl: "/ogre.png",
    parameters: [
      { title: "Strength", value: 3 },
      { title: "Endurance", value: 3 },
      { title: "Dexterity", value: 0 },
      { title: "Intelligence", value: 0 },
      { title: "Charisma", value: 0 },
      { title: "Luck", value: 0 },
    ],
    level: 1,
    HP: 10 + mobsHP,
    maxHP: 10 + mobsHP,
    scorePoints: 15,
  },
  {
    id: 4,
    title: "Troll",
    imageUrl: "/troll.png",
    parameters: [
      { title: "Strength", value: 4 },
      { title: "Endurance", value: 4 },
      { title: "Dexterity", value: 0 },
      { title: "Intelligence", value: 0 },
      { title: "Charisma", value: 0 },
      { title: "Luck", value: 1 },
    ],
    level: 1,
    HP: 10 + mobsHP,
    maxHP: 10 + mobsHP,
    scorePoints: 20,
  },
];
