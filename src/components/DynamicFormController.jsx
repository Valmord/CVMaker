import { useState } from "react";
import WorkForm from "./WorkExperienceForm";
import EducationForm from "./EducationForm";
import GeneralInfoForm from "./GeneralInfoForm";

const DynamicFormController = function DynamicForm({ form }) {
  const [workForms, setWorkForms] = useState([
    {
      id: crypto.randomUUID(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      active: true,
    },
  ]);
  const [educationForms, setEducationForms] = useState([<EducationForm />]);

  const addWorkForm = function addWorkForm() {
    const newWorkForms = [
      ...workForms.map((form) => ({ ...form, active: false })),
      {
        id: crypto.randomUUID(),
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        active: true,
      },
    ];
    setWorkForms(newWorkForms);
  };

  const updateWorkForm = function updateWorkForm(e) {
    const [field, ...id] = e.target.id.split("-");
    setWorkForms((prevForms) =>
      prevForms.map((form) => {
        return form.id === id.join("-")
          ? { ...form, [field]: e.target.value }
          : form;
      })
    );
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
          {workForms.map((workForm, index) => {
            return (
              <div
                className={`form-container ${
                  workForms.length > 1 ? "multiple" : ""
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
