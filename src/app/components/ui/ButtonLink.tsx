import Link from "next/link";
import styles from "./Button.module.css";

type Props = {
  children: React.ReactNode;
  href?: string;
  kind?: "primary" | "secondary";
  className?: string;
};

const ButtonLink: React.FC<Props> = ({
  children,
  kind = "primary",
  href = "/#",
  className,
}) => {
  return (
    <Link
      href={href}
      className={`${styles.button} ${
        kind === "secondary" ? styles["button--secondary"] : ""
      } ${className ? className : ""}`}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
