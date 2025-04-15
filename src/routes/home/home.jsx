import { INTRO } from "../../data/text_data";
import "./home.css";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <section className="home-container">
        <div className="introduction">
          <div className="intro-text">
            <h3>Hey, I&apos;m Ryan!</h3>
            <p>{INTRO.p1}</p>
            <p>{INTRO.p2}</p>
            </div>
          <div className="contact-links">
            <a href="https://github.com/smithr38atwit" target="_blank">
              <img height={26} src="/contact_icons/github.svg" alt="github icon" />
            </a>
            <a href="https://www.linkedin.com/in/smithr38/" target="_blank">
              <img width={26} src="/contact_icons/linkedin.svg" alt="linkedin icon" />
            </a>
            {/* TODO: add copy to clipboard option? */}
            <a href="mailto:smithr3873@gmail.com" target="_blank">
              <img width={18} src="/contact_icons/gmail.svg" alt="gmail icon" />
            </a>
          </div>
        </div>
        {/* TODO: add projects and experience highlights */}
      </section>
    </>
  );
}

export default Home;
