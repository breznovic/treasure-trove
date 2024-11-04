import s from "./ButtonWithDisable.module.css";

type ButtonWithDisableProps = {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
};

export const ButtonWithDisable = ({
  onClick,
  disabled,
  children,
}: ButtonWithDisableProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={disabled ? s.disabled : s.active}
    >
      {children}
    </button>
  );
};
