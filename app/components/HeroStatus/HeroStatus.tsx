import { Hero } from "@/app/utils/types/heroesTypes";
import s from "./HeroStatus.module.css";
import InfoBar from "../InfoBar/InfoBar";

type Props = {
  hero: Hero;
  username: string | null;
};

const HeroStatus = ({ hero, username }: Props) => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.main}>
          <div className={s.name}>
            <div>{hero.class.title}</div>
            <div>{username}</div>
          </div>
          <div>Level:{hero.level}</div>
          <img src={hero.imageUrl} alt={hero.class.title} className={s.image} />
        </div>
        <div className={s.parameters}>
          {hero.parameters.map((param) => (
            <div key={param.id} className={s.param}>
              {param.title.charAt(0).toUpperCase() + param.title.slice(1)}:{" "}
              <span>{param.value}</span>
            </div>
          ))}
        </div>
      </div>
      <InfoBar
        HP={hero.HP}
        maxHP={hero.maxHP}
        XP={hero.XP}
        xpToLevel={hero.xpToLevel}
      />
    </div>
  );
};

export default HeroStatus;
