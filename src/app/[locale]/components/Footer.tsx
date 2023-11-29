type Props = {};

const Footer: React.FC<Props> = ({}) => {
  return (
    <footer className=" relative py-6" id="footer">
      <div className=" absolute inset-6 z-0 bg-[--background-accent]"></div>
      <div className="wrapper relative z-10">
        <div className="gap-x flex items-start">
          <h2 className="flex-1">Want to work?</h2>
          <p className="flex-1 pt-8">
            If you need a modern and powerful website for your business, startup
            or yourself, I am available for work. You can email me directly at
            <a href="mailto:hello@email.com">hello@email.com</a>
          </p>
        </div>
        <div>© Anna Burdanova 2023 - 2024</div>
      </div>
    </footer>
  );
};

export default Footer;
