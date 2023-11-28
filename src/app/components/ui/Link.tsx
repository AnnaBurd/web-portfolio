import Link from "next/link";

import styles from "./Link.module.css";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const Button: React.FC<Props> = ({ children, href, className }) => {
  return (
    <Link
      className={`${styles["link-highlight"]}  text-base font-medium ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default Button;
