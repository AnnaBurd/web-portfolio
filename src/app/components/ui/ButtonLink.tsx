import Link from "next/link";
import styles from "./Button.module.css";

type Props = {
  children: React.ReactNode;
  href?: string;
  kind?: "primary" | "secondary";
  className?: string;
  // Umami custom event name, tracked on click
  umamiEvent?: string;
};

const ButtonLink: React.FC<Props> = ({
  children,
  kind = "primary",
  href = "/#",
  className,
  umamiEvent,
}) => {
  return (
    <Link
      href={href}
      className={`${styles.button} ${
        kind === "secondary" ? styles["button--secondary"] : ""
      } ${className ? className : ""}`}
      data-umami-event={umamiEvent}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
