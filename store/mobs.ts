import { mobs } from "@/app/utils/constants";
import { Mob } from "@/app/utils/types/mobstypes";
import { create } from "zustand";

type MobState = {
  mobs: Mob[];
  getRandomMob: () => Mob;
  decreaseMobHealth: (mobId: number | undefined, damage: number) => void;
  getNextMob: () => Mob;
};

const useMobStore = create<MobState>((set, get) => ({
  mobs: mobs,
  getRandomMob: () => {
    const { mobs } = get();
    const randomIndex = Math.floor(Math.random() * mobs.length);
    const mobForFight = mobs[randomIndex];
    return mobForFight;
  },
  decreaseMobHealth: (mobId: number | undefined, damage: number) => {
    const { mobs } = get();
    const updatedMobs = mobs.map((mob) => {
      if (mob.id === mobId) {
        const updatedMob = {
          ...mob,
          HP: mob.HP - damage,
        };
        localStorage.setItem("currentMob", JSON.stringify(updatedMob));
        return updatedMob;
      }
      return mob;
    });
    set({ mobs: updatedMobs });
  },
  getNextMob: () => {
    const newMob = get().getRandomMob();
    localStorage.setItem("currentMob", JSON.stringify(newMob));
    newMob.HP = newMob.maxHP;
    return newMob;
  },
}));

export default useMobStore;
