import { EXPERIENCE } from "../../data/text_data";
import ExperienceItem from "./components/experience_item";
import "./experience.css";

function Experience() {
  return (
    <>
      <h1>Experience</h1>
      <section className="experience-container">
        {EXPERIENCE.map((experience, i) => (
          <ExperienceItem key={experience.title} experience={experience} reverse={i % 2 === 1} />
        ))}
      </section>
    </>
  );
}

export default Experience;
