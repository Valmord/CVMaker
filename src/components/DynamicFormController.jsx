import { useState } from "react";
import WorkForm from "./WorkExperienceForm";
import EducationForm from "./EducationForm";
import GeneralInfoForm from "./GeneralInfoForm";

const DynamicFormController = function DynamicForm({
  form,
  formData,
  updateFormData,
  addWorkForm,
  addEducationForm,
}) {
  const [educationForms, setEducationForms] = useState([<EducationForm />]);

  const updateForm = function updateForm(e, formType) {
    const [field, ...splitId] = e.target.id.split("-");
    const id = splitId.join("-");
    updateFormData(formType, id, field, e.target.value);
  };

  const updateWorkForm = function updateWorkForm(e) {
    updateForm(e, "workExperience");
  };

  const updateEducationForm = function updateEducationForm(e) {
    updateForm(e, "education");
  };

  const updateGeneralForm = function updateGeneralForm(e) {
    updateForm(e, "general");
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
      {form === "general" && (
        <GeneralInfoForm
          formData={formData.general[0]}
          setInfo={updateGeneralForm}
          key={formData.general[0].key}
        />
      )}

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

      {form === "education" && (
        <>
          <button className="addEducationForm" onClick={addEducationForm}>
            +
          </button>
          {formData.education.map((educationForm, index) => {
            return (
              <div
                className={`form-container ${
                  formData.education.length > 1 ? "multiple" : ""
                }`}
                key={index}
              >
                <p className={educationForm.active ? "hidden" : ""}>
                  {educationForm.school
                    ? educationForm.school
                    : `School ${index + 1}`}
                  <button onClick={showIndividualForm}>▼</button>
                </p>

                <EducationForm
                  education={educationForm}
                  setEducation={updateEducationForm}
                  key={educationForm.id}
                  isActive={educationForm.active}
                />
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default DynamicFormController;
