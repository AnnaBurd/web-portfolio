import { fontSecondary } from "@/app/fonts";
import ButtonLink from "../../../components/ui/ButtonLink";

type Props = {};

const Hero: React.FC<Props> = ({}) => {
  return (
    <section className="relative flex min-h-screen w-full">
      <div className=" absolute inset-6 z-0 bg-[--background-accent]"></div>
      <div className="wrapper  z-10 flex w-full items-center justify-stretch ">
        <div className="pb-20">
          <h1
            className={
              fontSecondary.className +
              "  mb-6 font-black leading-tight [font-size:clamp(1.5rem,5vw,4rem)]"
            }
          >
            Hi, I&apos;m Anna,{" "}
            <span className="highlight">Web&nbsp;Developer</span>
            <br /> and <span className="highlight">React</span> Specialist
            {/* <span className="ml-4 inline-block h-14 w-14">
              <SmilingFace />
            </span> */}
          </h1>
          <p className="mb-12 max-w-prose text-lg leading-loose opacity-80 [text-wrap:balance]">
            I design and build beautiful websites for businesses around the
            globe. If you need a modern and powerful website, send me an email.
            If we are a good fit, I will give you a time and cost estimate.
          </p>

          <ButtonLink href="/#portfolio">See my work</ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;