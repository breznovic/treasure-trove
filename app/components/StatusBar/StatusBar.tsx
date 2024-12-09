import { Hero } from "@/app/utils/types/heroesTypes";
import s from "./StatusBar.module.css";
import InfoBar from "../InfoBar/InfoBar";
import { Mob } from "@/app/utils/types/mobstypes";

type Props = {
  hero?: Hero;
  mob?: Mob;
  username?: string | null;
};

const StatusBar = ({ hero, username, mob }: Props) => {
  return (
    <div className={s.container}>
      <div className={hero ? s.wrapper : s.mobWrapper}>
        <div className={hero ? s.main : s.mobInfo}>
          <div className={s.name}>
            <div>{hero ? hero.class.title : mob?.title}</div>
            <div>{username}</div>
          </div>
          <div>Level:{hero ? hero.level : mob?.level}</div>
          <img
            src={hero ? hero.imageUrl : mob?.imageUrl}
            alt={hero ? hero.class.title : mob?.title}
            className={s.image}
          />
        </div>
        <div className={s.parameters}>
          {hero?.parameters.map((param) => (
            <div key={param.id} className={s.param}>
              {param.title.charAt(0).toUpperCase() + param.title.slice(1)}:{" "}
              <span>{param.value}</span>
            </div>
          ))}
        </div>
      </div>
      <InfoBar
        HP={hero ? hero.HP : mob?.HP}
        maxHP={hero ? hero.maxHP : mob?.maxHP}
        XP={hero?.XP}
        xpToLevel={hero?.xpToLevel}
      />
    </div>
  );
};

export default StatusBar;
