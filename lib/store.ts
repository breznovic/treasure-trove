import { create } from "zustand";
import { User } from "@/app/utils/types/usersTypes";
import { v4 as uuidv4 } from "uuid";

type UserState = {
  users: User[];
  createUser: (username: string) => void;
};

export const useUserStore = create<UserState>((set) => ({
  users: [],
  createUser: (username) => {
    const newUser: User = {
      id: uuidv4(),
      username,
      hero: null,
      currentScore: 0,
      maxScore: 0,
    };

    set((state) => {
      const updatedUsers = [...state.users, newUser];
      console.log(`Creating user with username: ${username}`);
      console.log("Current users:", updatedUsers);
      return { users: updatedUsers };
    });
  },
}));
