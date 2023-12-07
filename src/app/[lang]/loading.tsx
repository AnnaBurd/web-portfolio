type Props = {};

const Loading: React.FC<Props> = () => {
  return (
    <section className="relative flex min-h-screen w-full">
      <div className=" absolute inset-6 z-0 bg-[--background-accent]"></div>
      <div className="wrapper  z-10 flex w-full items-center justify-stretch "></div>
    </section>
  );
};

export default Loading;