import Link from "./ui/Link";

type Props = {};

const Header: React.FC<Props> = ({}) => {
  return (
    <header className="absolute top-12 z-50 w-full">
      <div className="wrapper">
        <div className="flex items-center justify-between ">
          <a
            href="/"
            aria-current="page"
            aria-label="home"
            className="  mr-auto text-lg font-extrabold"
          >
            <span className="[font-size:1.15rem]">A</span>nna
            <span className="[font-size:1.15rem]">B</span>urd.
          </a>
          <nav>
            {/* <a href="/#portfolio" className="mx-4 p-2 text-base font-medium">
              my work
            </a> */}
            <Link href="/#portfolio" className="mx-4 ">
              my work
            </Link>
            <Link href="/#footer" className="mx-4 ">
              get in touch
            </Link>
            {/* <a href="/#footer" className="mx-4  p-2 text-base font-medium">
              get in touch
            </a> */}
          </nav>
          <div className="ml-8 text-base font-medium">EN</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
