import Link from "next/link";

import styles from "./Link.module.css";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  replace?: boolean;
  prefetch?: boolean;
  scroll?: boolean;
  // Umami custom event name, tracked on click
  umamiEvent?: string;
};

const Button: React.FC<Props> = ({
  children,
  href,
  className,
  replace = false,
  prefetch = false,
  scroll = true,
  umamiEvent,
}) => {
  const classes = `${styles["link-highlight"]} text-base font-medium ${className}`;

  // In case link is a simple anchor link, we don't want to use next/link (it is not working in production mode on netlify deployment)

  if (href.startsWith("#"))
    return (
      <a href={href} className={classes} data-umami-event={umamiEvent}>
        {children}
      </a>
    );

  // External links open in a new tab

  if (href.startsWith("http"))
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        data-umami-event={umamiEvent}
      >
        {children}
      </a>
    );

  return (
    <Link
      className={classes}
      href={href}
      replace={replace}
      scroll={scroll}
      prefetch={prefetch}
      data-umami-event={umamiEvent}
    >
      {children}
    </Link>
  );
};

export default Button;
