import s from "./HeroClass.module.css";
import Image from "next/image";

type Props = {
  title: string;
  bonus: string;
  image: string;
};
const HeroClass = (props: Props) => {
  const { title, bonus, image } = props;

  return (
    <div className={s.container}>
      <div>{title}</div>
      <div>{bonus}</div>
      <Image src={image} alt={title} width={100} height={100} className={s.image}/>
    </div>
  );
};

export default HeroClass;
