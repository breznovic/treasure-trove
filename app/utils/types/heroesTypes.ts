export type HeroClass = {
  id: number;
  title: string;
  bonus: string;
  imageUrl: string;
};

export type HeroParameter = {
  id: number;
  title: string;
  value: number;
};

export type Hero = {
  id: number;
  class: HeroClass;
  parameters: HeroParameter[];
  level: number;
  HP: number;
  maxHP: number;
  XP: number;
  points: number;
};
