import { HeroType } from "./heroesTypes";

export type User = {
  id: number;
  username: string;
  email: string;
  password: string;
  isAuthenticated: boolean;
  hero: HeroType | null;
  maxScore: number;
};

export type UsersState = {
  users: User[];
};
