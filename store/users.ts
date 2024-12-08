import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { User } from "@/app/utils/types/usersTypes";
import { v4 as uuidv4 } from "uuid";
import { Hero } from "@/app/utils/types/heroesTypes";

type UserState = {
  users: User[];
  createUser: (username: string) => string;
  createHero: (userId: string, hero: Hero) => void;
  getUserById: (id: string) => User | undefined;
};

export const useUserStore = create<UserState>()(
  persist(
    (set, getState) => ({
      users: [],

      createUser: (username) => {
        const newUser: User = {
          id: uuidv4(),
          username: username,
          hero: null,
          currentScore: 0,
          maxScore: 0,
        };

        console.log(newUser);

        set((state) => {
          const updatedUsers = [...state.users, newUser];
          return { users: updatedUsers };
        });

        localStorage.setItem(`user_${newUser.id}`, JSON.stringify(newUser));

        return newUser.id;
      },
      getUserById: (id) => {
        const state = getState();
        return state.users.find((user) => user.id === id);
      },
      createHero: (userId: string, hero: Hero) => {
        set((state) => {
          const updatedUsers = state.users.map((user) =>
            user.id === userId ? { ...user, hero } : user
          );
          return { users: updatedUsers };
        });

        localStorage.setItem(`hero_${userId}`, JSON.stringify(hero));
      },
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
