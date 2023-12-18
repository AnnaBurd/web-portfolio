import { fontSecondary } from "@/app/fonts";

type Props = {};

const About: React.FC<Props> = ({}) => {
  return (
    <section className="wrapper ">
      <div className="gap-x flex flex-col items-start md:flex-row">
        <h2
          className={
            fontSecondary.className +
            `  flex-1 font-black leading-tight md:mb-4`
          }
        >
          What <span className="highlight">I do</span>
        </h2>
        <div className="flex-1 pb-16 pt-6 md:pt-8">
          <h3 className="mb-2 text-xl font-medium md:mb-4 md:text-3xl">
            Web Development
          </h3>
          <p className="mb-2  text-[0.95rem] leading-relaxed [text-wrap:balance]  md:max-w-prose md:text-base md:tracking-wide ">
            I design beautiful and powerful websites for modern businesses. Any
            business today needs a website that wins customers’ trust and helps
            you do your business well. I make sure your website is up to that
            standard.
          </p>

          <h3 className="mb-2 mt-6 text-xl font-medium md:mb-4 md:mt-14 md:text-3xl">
            Web blabla
          </h3>
          <p className="mb-2  text-[0.95rem] leading-relaxed [text-wrap:balance]  md:max-w-prose md:text-base md:tracking-wide ">
            I build websites in Webflow where I can create responsive, powerful
            and fully custom websites. Plus, Webflow has an incredibly simple
            Content Editor for you and your team to edit website content quickly
            and easily.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
