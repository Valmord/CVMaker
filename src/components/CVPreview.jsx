import { formatDate } from "../utils/helpers";
import "./CVPreview.css";

const CVPreview = function CVPreview({ formData }) {
  const general = formData.general[0];
  return (
    <main>
      <div className="left-margin"></div>
      <div className="cv">
        <section>
          <h2 className="name">{general.name}</h2>
          <p className="email">{general.email}</p>
          <p>{general.phone ? `Phone: ${general.phone}` : ""}</p>
        </section>
        <section className="education-history">
          <h3>{formData.education[0].school ? "Education" : ""}</h3>
          {formData.education.map((education) => {
            if (!education.school) return;
            return (
              <div key={education.id} className="cv-education-container">
                <p>
                  <strong>{education.school}</strong>{" "}
                  {education.startDate
                    ? ` | ${formatDate(education.startDate)} to ${
                        education.endDate
                          ? formatDate(education.endDate)
                          : "present"
                      }`
                    : ""}
                </p>
                <p>
                  {education.degree ? education.degree : ""}{" "}
                  {education.major ? " Majoring in " + education.major : ""}
                </p>

                <p></p>
              </div>
            );
          })}
        </section>
        <section className="work-history">
          <h3>{formData.workExperience[0].company ? "Work History" : ""}</h3>
          {formData.workExperience.map((experience) => {
            if (!experience.company) return;
            return (
              <div key={experience.id} className="cv-work-container">
                <p>
                  <strong>{experience.company}</strong>
                  {experience.position ? " |  as " + experience.position : ""}
                </p>
                <p>
                  {" "}
                  {experience.startDate
                    ? `${formatDate(experience.startDate)} to ${
                        experience.endDate
                          ? formatDate(experience.endDate)
                          : "present"
                      }`
                    : ""}
                </p>
              </div>
            );
          })}
        </section>
      </div>
      <div className="left-margin"></div>
    </main>
  );
};

export default CVPreview;
