import { PROJECTS } from "../../data/text_data";
import ProjectCard from "./components/project_card";
import "./projects.css";

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <section className="projects-container">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} reverse={i % 2 === 1} />
        ))}
      </section>
    </>
  );
}

export default Projects;
