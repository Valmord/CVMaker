import Input from "../utils/helpers";

const GeneralInfoForm = function GeneralInfoForm({ formData, setInfo }) {
  return (
    <form>
      <div className="inputs">
        <Input
          name="Name: "
          inputId={`name-${formData.id}`}
          onChange={setInfo}
          value={formData.name}
        />
        <Input
          name="Email: "
          type="email"
          inputId={`email-${formData.id}`}
          onChange={setInfo}
          value={formData.email}
        />
        <Input
          name="Phone Number: "
          type="tel"
          inputId={`phone-${formData.id}`}
          onChange={setInfo}
          value={formData.phone}
          pattern="[0-9\\-\\s]*" // pattern to match digits, hyphens, and spaces
          placeholder="111-2222"
        />
      </div>
    </form>
  );
};

export default GeneralInfoForm;
