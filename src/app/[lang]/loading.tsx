type Props = {};

// TODO: check if on top of the page, if not, show different loading animation??

const Loading: React.FC<Props> = () => {
  return (
    <section className="relative flex min-h-screen w-full">
      <div className=" absolute inset-[--inset] z-0 bg-[--background-accent]"></div>
      <div className="wrapper  z-10 flex w-full items-center justify-stretch "></div>
    </section>
  );
};

export default Loading;
