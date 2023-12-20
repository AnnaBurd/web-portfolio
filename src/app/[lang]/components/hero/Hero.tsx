import { fontSecondary } from "@/app/fonts";
import ButtonLink from "../../../components/ui/ButtonLink";
import { Locale } from "@/app/i18n/i18n-config";
import { useTranslation } from "@/app/i18n/server";

type Props = {
  lang: Locale;
};

const Hero: React.FC<Props> = async ({ lang }) => {
  const translation = (await useTranslation(lang, "home")).t;
  const translationCommon = (await useTranslation(lang, "common")).t;

  return (
    <section className="relative flex min-h-[100svh] w-full">
      <div className=" absolute inset-[--inset] z-0 bg-[--background-accent]"></div>
      <div className="wrapper  z-10 flex w-full items-center justify-stretch ">
        <div className="4xl:pb-60 4xl:pt-40 mb-10 mt-16">
          <h1
            className={
              fontSecondary.className + ` mb-6 font-black leading-tight`
            }
          >
            <span
              dangerouslySetInnerHTML={{
                __html: translation("h1", {
                  interpolation: { escapeValue: false },
                }),
              }}
            ></span>
          </h1>
          <p className="mb-12 max-w-prose text-base leading-7 opacity-80 [text-wrap:balance] md:text-lg md:leading-loose">
            {translation("intro")}
          </p>

          <ButtonLink
            href="#portfolio"
            className=" min-w-[clamp(10rem,15vw,15rem)]"
          >
            {translationCommon("btn.work")}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
