"use client";

import s from "./Button.module.css";

type Props = {
  title: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = (props: Props) => {
  const buttonClassName = `${s.button} ${
    props.className ? props.className : ""
  } ${props.disabled ? s.disabled : ""}`;

  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <div>
      <button
        className={buttonClassName}
        disabled={props.disabled}
        onClick={handleClick}
      >
        {props.title}
      </button>
    </div>
  );
};
