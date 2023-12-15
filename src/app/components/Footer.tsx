import { fontSecondary } from "../fonts";
import SmilingFace from "./SmilingFace";
import Link from "./ui/Link";

type Props = {};

const Footer: React.FC<Props> = ({}) => {
  return (
    <footer className=" relative pb-12 pt-16" id="footer">
      <div className=" absolute inset-[--inset] z-0 bg-[--background-accent]"></div>
      <div className="wrapper relative z-10">
        <div className="gap-x mb-64 flex items-start">
          <h2
            className={
              fontSecondary.className + `  mb-4 flex-1 font-black leading-tight`
            }
          >
            Want to <span className="highlight">work? </span>{" "}
            <span className="relative">
              <span className="absolute left-6 top-2 inline-block h-14 w-14">
                <SmilingFace isBlinking={true} />
              </span>
            </span>
          </h2>
          <p className="flex-1 pt-8 text-base leading-relaxed tracking-wide [text-wrap:balance]">
            If you need a modern and powerful website for your business, startup
            or yourself, I am available for work. You can email me directly at
            <Link href="mailto:burdanovaas@gmail.com" className="mx-1 my-0">
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
