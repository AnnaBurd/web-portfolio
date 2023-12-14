import Link from "next/link";

import styles from "./Link.module.css";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  replace?: boolean;
  scroll?: boolean;
};

const Button: React.FC<Props> = ({
  children,
  href,
  className,
  replace = false,
  scroll = true,
}) => {
  return (
    <Link
      className={`${styles["link-highlight"]}  text-base font-medium ${className}`}
      href={href}
      replace={replace}
      scroll={scroll}
    >
      {children}
    </Link>
  );
};

export default Button;
