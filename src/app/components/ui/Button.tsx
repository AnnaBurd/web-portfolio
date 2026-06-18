import styles from "./Button.module.css";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  kind?: "primary" | "secondary";
  className?: string;
};

const ButtonLink: React.FC<Props> = ({
  children,
  kind = "primary",
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${
        kind === "secondary" ? styles["button--secondary"] : ""
      } ${className ? className : ""}`}
    >
      {children}
    </button>
  );
};

export default ButtonLink;
