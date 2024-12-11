import PropTypes from "prop-types";

function ExperienceItem({
  experience = {
    title: "",
    company: "",
    start_date: "",
    end_date: "",
    description: "",
    icon_path: "",
  },
  reverse = false,
}) {
  return (
    <div className={`text-content-flow experience-card ${reverse ? "reverse" : ""}`}>
      <div className="text-content-header">
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2>{experience.title}</h2>
          <span className="horizontal-line"></span>
          <h3 className={`experience-date ${reverse ? "reverse" : ""}`}>
            {experience.start_date} - {experience.end_date}
          </h3>
          <img src={experience.icon_path} alt={`${experience.company} logo`} />
        </div>
        <h3>{experience.company}</h3>
      </div>
      <p>{experience.description}</p>
    </div>
  );
}

export default ExperienceItem;

ExperienceItem.propTypes = {
  experience: PropTypes.shape({
    title: PropTypes.string,
    company: PropTypes.string,
    start_date: PropTypes.string,
    end_date: PropTypes.string,
    description: PropTypes.string,
    icon_path: PropTypes.string,
  }),
  reverse: PropTypes.bool,
};
