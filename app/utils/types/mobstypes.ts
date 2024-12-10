import { Parameter } from "./heroesTypes";

export type Mob = {
  id: number;
  title: string;
  imageUrl: string;
  parameters: Parameter[];
  level: number;
  HP: number;
  maxHP: number;
  isDead?: boolean;
  expPoints: number;
  scorePoints: number;
};
