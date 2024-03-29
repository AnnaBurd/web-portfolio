import Reveal from "@/app/components/ui/Reveal";
import { fontSecondary } from "@/app/fonts";
import { Locale } from "@/app/i18n/i18n-config";
import { useTranslation } from "@/app/i18n/server";

type Props = {
  lang: Locale;
};

const About: React.FC<Props> = async ({ lang }) => {
  const translation = (await useTranslation(lang, "home")).t;

  return (
    <section className="wrapper ">
      <div className="gap-x flex flex-col items-start md:flex-row">
        <Reveal className="flex-1 " options={{ revealHighlight: true }}>
          <h2
            className={
              fontSecondary.className + `  font-black leading-tight md:mb-4`
            }
          >
            <span
              dangerouslySetInnerHTML={{
                __html: translation("about.title", {
                  interpolation: { escapeValue: false },
                }),
              }}
            ></span>
          </h2>
        </Reveal>
        <div className="flex-1 pb-16 pt-6 md:pt-8">
          <Reveal options={{ animationDelay: 0.4 }}>
            <h3 className="mb-2 text-xl font-medium md:mb-4 md:text-3xl">
              {translation("about.p1.title")}
            </h3>

            <p className="mb-2 text-[0.95rem] leading-relaxed [text-wrap:balance]  md:max-w-prose md:text-base md:tracking-wide ">
              {translation("about.p1.text")}
            </p>
          </Reveal>

          <Reveal options={{ animationDelay: 0.4 }}>
            <h3 className="mb-2 mt-6 text-xl font-medium md:mb-4 md:mt-14 md:text-3xl">
              {translation("about.p2.title")}
            </h3>
            <p className="mb-2  text-[0.95rem] leading-relaxed [text-wrap:balance]  md:max-w-prose md:text-base md:tracking-wide ">
              {translation("about.p2.text")}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
