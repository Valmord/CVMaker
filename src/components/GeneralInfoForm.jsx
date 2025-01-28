function Input({ type = "text", name, inputId }) {
  return (
    <>
      <label htmlFor={inputId}>{name}</label>
      <input type={type} id={inputId} />
    </>
  );
}

const GeneralInfoForm = function GeneralInfoForm() {
  return (
    <form>
      <h1>Enter Your Details</h1>
      <div className="inputs">
        <Input name="Name: " inputId={"name"} />
        <Input name="Email: " type="email" inputId={"email"} />
        <Input name="Phone Number: " type="tel" inputId={"phone"} />
      </div>
    </form>
  );
};

export default GeneralInfoForm;
