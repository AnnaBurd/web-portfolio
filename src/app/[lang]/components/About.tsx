import { fontSecondary } from "@/app/fonts";

type Props = {};

const About: React.FC<Props> = ({}) => {
  return (
    <section className="wrapper ">
      <div className="gap-x flex items-start">
        <h2
          className={
            fontSecondary.className + `  mb-4 flex-1 font-black leading-tight`
          }
        >
          What <span className="highlight">I do</span>
        </h2>
        <div className="flex-1 pb-16 pt-8">
          <h3 className="mb-4 text-2xl font-medium">Web Development</h3>
          <p className="mb-2  text-base leading-relaxed tracking-wide [text-wrap:balance]">
            I design beautiful and powerful websites for modern businesses. Any
            business today needs a website that wins customers’ trust and helps
            you do your business well. I make sure your website is up to that
            standard.
          </p>

          <h3 className="mb-4 mt-14 text-2xl font-medium">Web blabla</h3>
          <p className="mb-2  text-base leading-relaxed tracking-wide [text-wrap:balance]">
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
