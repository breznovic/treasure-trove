import { mobs } from "@/app/utils/constants";
import { Mob } from "@/app/utils/types/mobstypes";
import { create } from "zustand";

interface MobState {
  mobs: Mob[];
  getRandomMob: () => Mob;
}

const useMobStore = create<MobState>((set, get) => ({
  mobs: mobs,
  getRandomMob: () => {
    const { mobs } = get();
    const randomIndex = Math.floor(Math.random() * mobs.length);
    return mobs[randomIndex];
  },
}));

export default useMobStore;
