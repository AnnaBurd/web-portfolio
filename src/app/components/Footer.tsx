import { fontSecondary } from "../fonts";
import SmilingFace from "./SmilingFace";
import Link from "./ui/Link";

type Props = {};

const Footer: React.FC<Props> = ({}) => {
  return (
    <footer className=" relative pb-[calc(var(--inset)*2)] pt-16" id="footer">
      <div className=" absolute inset-[--inset] z-0 bg-[--background-accent]"></div>
      <div className="wrapper relative z-10">
        <div className="gap-x mb-40 flex flex-col items-start md:mb-64 md:flex-row">
          <h2
            className={
              fontSecondary.className +
              `  mb-4 flex-1  font-black leading-tight`
            }
          >
            Want to <span className="highlight">work? </span>{" "}
            <span className="relative">
              <span className="absolute bottom-0.5 left-4 inline-block h-[clamp(2rem,4vw,3.8rem)] w-[clamp(2.1rem,4.3vw,4.4rem)]  md:left-6 lg:bottom-1">
                {/* <span className="absolute bottom-0 left-4 inline-block h-10 w-10 md:left-6 md:h-12 md:w-12 lg:bottom-1 lg:h-14 lg:w-14"> */}
                <SmilingFace isBlinking={true} />
              </span>
            </span>
          </h2>
          <p className="flex-1 pt-8 text-[0.95rem] leading-relaxed [text-wrap:balance]  md:max-w-prose md:text-base md:tracking-wide ">
            If you need a modern and powerful website for your business, startup
            or yourself, I am available for work. You can email me directly at
            <Link
              href="mailto:burdanovaas@gmail.com"
              className="mx-1 my-0 max-md:text-sm"
            >
              burdanovaas@gmail.com
            </Link>
          </p>
        </div>
        <div className="text-sm opacity-40">
          © Anna Burdanova, 2022 - {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
