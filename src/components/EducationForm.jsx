function Input({ type = "text", name, inputId }) {
  return (
    <>
      <label htmlFor={inputId}>{name}</label>
      <input type={type} id={inputId} />
    </>
  );
}

const EducationForm = function EducationForm() {
  return (
    <form>
      <div className="inputs">
        <Input name="School: " inputId={"school"} />
        <Input name="Degree: " inputId={"degree"} />
        <Input name="Major: " inputId={"major"} />
        <Input name="Start Date" type="date" inputId={"start-date"} />
        <Input name="End Date" type="date" inputId={"end-date"} />
      </div>
    </form>
  );
};

export default EducationForm;
