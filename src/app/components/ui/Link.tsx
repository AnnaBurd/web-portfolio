import Link from "next/link";

import styles from "./Link.module.css";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  replace?: boolean;
  prefetch?: boolean;
  scroll?: boolean;
};

const Button: React.FC<Props> = ({
  children,
  href,
  className,
  replace = false,
  prefetch = false,
  scroll = true,
}) => {

  // In case link is a simple anchor link, we don't want to use next/link (it is not working in production mode on netlify deployment)

  if(href.startsWith("#")) return (<a href={href} className={`${styles["link-highlight"]} text-base font-medium ${className}`}>{children}</a>);


  return (
    <Link
      className={`${styles["link-highlight"]}  text-base font-medium ${className}`}
      href={href}
      replace={replace}
      scroll={scroll}
      prefetch={prefetch}
    >
      {children}
    </Link>
  );
};

export default Button;
