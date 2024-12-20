export type HeroClass = {
  id: number;
  title: string;
  bonus: string;
  imageUrl: string;
};

export type Parameter = {
  id?: number;
  title: string;
  value: number;
};

export type Hero = {
  id: string;
  class: HeroClass;
  imageUrl: string;
  parameters: Parameter[];
  level: number;
  HP: number;
  maxHP: number;
  XP: number;
  xpToLevel: number;
  points: number;
};
