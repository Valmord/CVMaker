import { useState } from "react";

function Input({ type = "text", name, inputId, value, onChange }) {
  return (
    <>
      <label htmlFor={inputId}>{name}</label>
      <input type={type} id={inputId} value={value} onChange={onChange} />
    </>
  );
}

const WorkForm = function WorkExperienceForm() {
  const [experience, setExperience] = useState({
    id: crypto.randomUUID(),
    company: "",
    position: "",
    startDate: "",
    endDate: "",
  });

  const updateWorkExp = function updateWorkExperience(e) {
    setExperience({ ...experience, [e.target.id]: e.target.value });
    console.log(experience);
  };

  return (
    <form>
      <div className="inputs" key={experience.id}>
        <Input
          name="Company: "
          inputId={"company"}
          value={experience.company}
          onChange={updateWorkExp}
        />
        <Input
          name="Position: "
          inputId={"position"}
          value={experience.position}
          onChange={updateWorkExp}
        />
        <Input
          name="Date Started: "
          type="date"
          inputId={"startDate"}
          value={experience.startDate}
          onChange={updateWorkExp}
        />
        <Input
          name="Date Ended: "
          type="date"
          inputId={"endDate"}
          value={experience.endDate}
          onChange={updateWorkExp}
        />
        <Input
          name="Current Employment"
          type="checkbox"
          inputId={"currentEmployer"}
        />
      </div>
    </form>
  );
};

export default WorkForm;
