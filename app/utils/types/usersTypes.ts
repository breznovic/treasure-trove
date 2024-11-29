import { Hero } from "./heroesTypes";

export type User = {
  id: string;
  username: string;
  hero: Hero | null;
  currentScore: number;
  maxScore: number;
};

export type UsersState = {
  users: User[];
};
