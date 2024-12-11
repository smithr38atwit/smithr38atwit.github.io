import PropTypes from "prop-types";

function ProjectCard({
  project = {
    title: "",
    type: "",
    start_year: new Date().getFullYear(),
    end_year: new Date().getFullYear(),
    description: "",
    image: "",
    links: [],
  },
  reverse = false,
}) {
  // const duration = project.start_year === project.end_year ? `${project.start_year}` : `${project.start_year} - ${project.end_year}`;

  return (
    <div className={`card ${reverse ? "reverse" : ""}`}>
      <div className="image-container">
        {project.image ? (
          <>
            <img src={project.image} alt={`${project.title} demo image`} />
            {project.links.length > 0 && (
              <div className="image-overlay">
                {project.links.map((link) => (
                  <a className="overlay-link" key={link.name} href={link.link} target="_blank" rel="noreferrer">
                    <span>{link.name}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333M10 2H14M14 2V6M14 2L6.66667 9.33333"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="img-placeholder">Work In Progress</div>
        )}
      </div>
      <div className="text-content-flow">
        <div className="text-content-header">
          <h2>{project.title}</h2>
          <h3>{project.type}</h3>
        </div>
        <p className="text-content">{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.string,
    start_year: PropTypes.number,
    end_year: PropTypes.number,
    description: PropTypes.string,
    wip: PropTypes.bool,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        link: PropTypes.string,
      })
    ),
  }),
  reverse: PropTypes.bool,
};
