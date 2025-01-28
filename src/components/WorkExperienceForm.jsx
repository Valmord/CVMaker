function Input({ type = "text", name, inputId }) {
  return (
    <>
      <label htmlFor={inputId}>{name}</label>
      <input type={type} id={inputId} />
    </>
  );
}

const WorkForm = function WorkExperienceForm() {
  return (
    <form>
      <h1>Enter Your Details</h1>
      <div className="inputs">
        <Input name="Work: " inputId={"nameasd"} />
        <Input name="Email: " type="email" inputId={"emailasdf"} />
        <Input name="Phone Number: " type="tel" inputId={"phoneasdf"} />
      </div>
    </form>
  );
};

export default WorkForm;
