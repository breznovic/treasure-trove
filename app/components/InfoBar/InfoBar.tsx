import s from "./InfoBar.module.css";

type Props = {
  HP: number;
  maxHP: number;
  XP: number;
};
const InfoBar = ({ HP, maxHP, XP }: Props) => {
  const currentHealthPercentage = (HP / maxHP) * 100;

  const computeBarColor = () => {
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

  return (
    <div className={s.main}>
      <div>Health:</div>
      <div className={s.container}>
        <div
          className={s.bar}
          style={{
            width: `${currentHealthPercentage}%`,
            minWidth: "30px",
            backgroundColor: computeBarColor(),
          }}
        >
          <div className={s.number}>{Math.floor(currentHealthPercentage)}%</div>{" "}
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
