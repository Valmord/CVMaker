import { useState } from "react";
import WorkForm from "./WorkExperienceForm";
import EducationForm from "./EducationForm";
import GeneralInfoForm from "./GeneralInfoForm";

const DynamicFormController = function DynamicForm({ form }) {
  const [workForms, setWorkForms] = useState([
    <WorkForm key={crypto.randomUUID()} />,
  ]);
  const [educationForms, setEducationForms] = useState([<EducationForm />]);

  const addWorkForm = function addWorkForm() {
    const newWorkForms = [...workForms, <WorkForm key={crypto.randomUUID()} />];
    setWorkForms(newWorkForms);
  };

  // const renderForm = function renderForm(currentTab) {
  //   switch (currentTab) {
  //     case "General":
  //       return <GeneralInfoForm />;
  //     case "Education":
  //       return <DynamicFormController form="education" />;
  //     default:
  //       return <DynamicFormController form="work" />;
  //   }
  // };

  return (
    <>
      {form === "general" && <GeneralInfoForm />}

      {form === "work" && (
        <>
          <div>
            <button className="addWorkForm" onClick={addWorkForm}>
              +
            </button>
          </div>
          {workForms.map((workForm, index) => {
            if (workForms.length > 1)
              return (
                <div className="form-container" key={index}>
                  <h2>Some Title</h2>
                  {workForm}
                </div>
              );
            else return workForm;
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
