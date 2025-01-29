import Input from "../utils/helpers";

const EducationForm = function EducationForm({
  education,
  setEducation,
  isActive,
}) {
  return (
    <form className={!isActive ? "hidden" : ""}>
      <div className="inputs" key={education.id}>
        <Input
          name="School"
          inputId={`school-${education.id}`}
          value={education.school}
          onChange={setEducation}
        />
        <Input
          name="Degree"
          inputId={`degree-${education.id}`}
          value={education.degree}
          onChange={setEducation}
        />
        <Input
          name="Major"
          inputId={`major-${education.id}`}
          value={education.major}
          onChange={setEducation}
        />
        <Input
          name="Date Started"
          type="date"
          inputId={`startDate-${education.id}`}
          value={education.startDate}
          onChange={setEducation}
        />
        <Input
          name="Date Ended*"
          type="date"
          inputId={`endDate-${education.id}`}
          value={education.endDate}
          onChange={setEducation}
        />
        <div>*Don't change if incomplete</div>
      </div>
    </form>
  );
};

export default EducationForm;
