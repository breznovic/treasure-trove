import s from "./HeroClassIcon.module.css";
import Image from "next/image";

type Props = {
  title: string;
  bonus: string;
  image: string;
  isActive: boolean;
  onClick?: () => void;
};
const HeroClassIcon = (props: Props) => {
  const { title, bonus, image, isActive, onClick } = props;

  return (
    <div className={s.container}>
      <h4>{title}</h4>
      <i>{bonus}</i>
      <Image
        src={image}
        alt={title}
        width={100}
        height={100}
        className={isActive ? s.active : s.image}
        onClick={onClick}
      />
    </div>
  );
};

export default HeroClassIcon;
