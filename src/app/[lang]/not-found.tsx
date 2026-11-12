import { fontPrimary } from "@/app/fonts";
// import Link from "next/link";

import Link from "@/app/components/ui/Link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen w-full">
      <div className=" absolute inset-[--inset] z-0 bg-[--background-accent]"></div>
      <div className="wrapper  z-10 flex w-full items-center justify-stretch ">
        <div className="absolute top-24 -mt-2 mb-1 text-lg font-semibold uppercase tracking-widest opacity-30">
          404
        </div>
        <div className="mx-auto w-full max-w-prose text-center">
          <h1
            className={
              fontPrimary.className +
              `   mb-6 text-4xl font-black leading-tight [text-wrap:balance]`
            }
          >
            Page not found :(
          </h1>
          <p className="my-auto mb-8 text-base leading-relaxed tracking-wide [text-wrap:balance]">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          {/* <Link href="/" replace scroll={false}> */}
          <Link href="/" replace={true} scroll={false}>
            go home
          </Link>
        </div>
      </div>
    </section>
  );
}
