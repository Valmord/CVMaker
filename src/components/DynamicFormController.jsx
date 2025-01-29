import { useState } from "react";
import WorkForm from "./WorkExperienceForm";
import EducationForm from "./EducationForm";
import GeneralInfoForm from "./GeneralInfoForm";

const DynamicFormController = function DynamicForm({
  form,
  formData,
  updateFormData,
  addWorkForm,
}) {
  const [educationForms, setEducationForms] = useState([<EducationForm />]);

  const updateWorkForm = function updateWorkForm(e) {
    const [field, ...splitId] = e.target.id.split("-");
    const id = splitId.join("-");
    updateFormData("workExperience", id, field, e.target.value);
  };

  const showIndividualForm = function showIndividualForm(e) {
    const forms = document.querySelectorAll("form");
    const formTitles = document.querySelectorAll(".form-container > p");
    forms.forEach((form) => {
      form.classList.add("hidden");
    });
    formTitles.forEach((title) => {
      title.classList.remove("hidden");
    });
    console.dir(e);
    e.target.parentNode.classList.add("hidden");
    e.target.parentNode.nextSibling.classList.remove("hidden");
  };

  return (
    <>
      {form === "general" && <GeneralInfoForm />}

      {form === "work" && (
        <>
          <button className="addWorkForm" onClick={addWorkForm}>
            +
          </button>
          {formData.workExperience.map((workForm, index) => {
            return (
              <div
                className={`form-container ${
                  formData.workExperience.length > 1 ? "multiple" : ""
                }`}
                key={index}
              >
                <p className={workForm.active ? "hidden" : ""}>
                  {workForm.company
                    ? workForm.company
                    : `Position ${index + 1}`}
                  <button onClick={showIndividualForm}>▼</button>
                </p>

                <WorkForm
                  experience={workForm}
                  setExperience={updateWorkForm}
                  key={workForm.id}
                  isActive={workForm.active}
                />
              </div>
            );
          })}
        </>
      )}

      {form === "education" &&
        educationForms.map((educationForm) => {
          return educationForm;
        })}
    </>
  );
};

export default DynamicFormController;
