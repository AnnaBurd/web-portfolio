type Props = {};

const About: React.FC<Props> = ({}) => {
  return (
    <section className="wrapper ">
      <div className="gap-x flex items-start">
        <h2 className="flex-1">What I do</h2>
        <div className="flex-1 pt-8">
          <h3>Web Development</h3>
          <p>
            I design beautiful and powerful websites for modern businesses. Any
            business today needs a website that wins customers’ trust and helps
            you do your business well. I make sure your website is up to that
            standard.
          </p>

          <h3>Web blabla</h3>
          <p>
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
