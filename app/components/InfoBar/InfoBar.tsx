import s from "./InfoBar.module.css";

type Props = {
  HP?: number;
  maxHP?: number;
  XP?: number;
  xpToLevel?: number;
};
const InfoBar = ({ HP, maxHP, XP, xpToLevel }: Props) => {
  let currentExpPercentage = 0;

  let currentHealthPercentage = 0;

  if (HP !== undefined && maxHP !== undefined) {
    currentHealthPercentage = (HP / maxHP) * 100;
  }

  if (XP !== undefined && xpToLevel !== undefined) {
    currentExpPercentage = (XP / xpToLevel) * 100;
  }

  const computeHealthBarColor = () => {
    if (currentHealthPercentage === 100) {
      return "green";
    }
    if (currentHealthPercentage > 75) {
      return "hsl(120, 50%, 50%)";
    }
    if (currentHealthPercentage > 50) {
      return "hsl(120, 50%, 60%)";
    }
    if (currentHealthPercentage > 25) {
      return "orange";
    } else {
      return "red";
    }
  };

  const computeExpBarColor = () => {
    return "lightgray";
  };

  return (
    <div className={s.main}>
      <div className={s.health}>
        <div>Health:</div>
        <div className={s.container}>
          <div
            className={s.bar}
            style={{
              width: `${currentHealthPercentage}%`,
              minWidth: "30px",
              backgroundColor: computeHealthBarColor(),
            }}
          >
            <div className={s.number}>
              {Math.floor(currentHealthPercentage)}%
            </div>
          </div>
        </div>
      </div>
      {XP !== undefined && xpToLevel !== undefined ? (
        <div className={s.exp}>
          <div>Exp:</div>
          <div className={s.container}>
            <div
              className={s.bar}
              style={{
                width: `${currentExpPercentage}%`,
                minWidth: "0px",
                backgroundColor: computeExpBarColor(),
              }}
            >
              <div className={s.number}>
                {Math.floor(currentExpPercentage)}%
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default InfoBar;
