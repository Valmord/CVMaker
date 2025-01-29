import { useState } from "react";

function Input({ type = "text", name, inputId, value, onChange }) {
  return (
    <>
      <label htmlFor={inputId}>{name}</label>
      <input type={type} id={inputId} value={value} onChange={onChange} />
    </>
  );
}

const WorkForm = function WorkExperienceForm({
  experience,
  setExperience,
  isActive,
}) {
  return (
    <form className={!isActive ? "hidden" : ""}>
      <div className="inputs" key={experience.id}>
        <Input
          name="Company"
          inputId={`company-${experience.id}`}
          value={experience.company}
          onChange={setExperience}
        />
        <Input
          name="Position"
          inputId={`position-${experience.id}`}
          value={experience.position}
          onChange={setExperience}
        />
        <Input
          name="Date Started"
          type="date"
          inputId={`startDate-${experience.id}`}
          value={experience.startDate}
          onChange={setExperience}
        />
        <Input
          name="Date Ended*"
          type="date"
          inputId={`endDate-${experience.id}`}
          value={experience.endDate}
          onChange={setExperience}
        />
        <div>*Don't change this if current job</div>
      </div>
    </form>
  );
};

export default WorkForm;
