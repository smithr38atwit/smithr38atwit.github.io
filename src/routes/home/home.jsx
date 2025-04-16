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
					<div>
						<p style={{ marginBottom: 8 }}>Skills:</p>
						<div className="skills">
							{/* Python, JS, HTML, CSS, C#, SQL, React */}
							<img src="/skill_icons/python.svg" alt="Python" title="Python" />
							<img src="/skill_icons/javascript.svg" alt="JavaScript" title="JavaScript" />
							<img src="/skill_icons/html5.svg" alt="HTML" title="HTML" />
							<img src="/skill_icons/css.svg" alt="CSS" title="CSS" />
							<img src="/skill_icons/csharp.svg" alt="C#" title="C#" />
							<img src="/skill_icons/mysql.svg" alt="SQL" title="SQL" />
							<img src="/skill_icons/react.svg" alt="React" title="React" />
						</div>
					</div>
					<div>
						<p style={{ marginBottom: 8 }}>Links:</p>
          <div className="contact-links">
            <a href="https://github.com/smithr38atwit" target="_blank">
								<img height={26} src="/contact_icons/github.svg" alt="github" title="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/smithr38/" target="_blank">
								<img width={26} src="/contact_icons/linkedin.svg" alt="linkedin" title="LinkedIn" />
            </a>
            {/* TODO: add copy to clipboard option? */}
            <a href="mailto:smithr3873@gmail.com" target="_blank">
								<img width={18} src="/contact_icons/gmail.svg" alt="gmail" title="GMail" />
            </a>
						</div>
          </div>
        </div>
        {/* TODO: add projects and experience highlights */}
      </section>
    </>
  );
}

export default Home;
