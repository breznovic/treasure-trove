import { create } from "zustand";
import { Hero } from "@/app/utils/types/heroesTypes";

type HeroState = {
  getHeroById: (userId: string) => Hero | null;
  increaseHeroExp: (userId: string, expPoints: number) => void;
};

export const useHeroStore = create<HeroState>((set, get) => ({
  getHeroById: (userId: string) => {
    const heroString = localStorage.getItem(`hero_${userId}`);
    return heroString ? JSON.parse(heroString) : null;
  },
  increaseHeroExp: () => {},
}));
