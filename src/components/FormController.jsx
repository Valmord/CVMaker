import { useState } from "react";
import FormTabs from "./FormTabs";
import "./FormController.css";
import DynamicFormController from "./DynamicFormController";

const renderHeader = function renderHeader(currentTab) {
  switch (currentTab) {
    case "General":
      return "Personal Details";
    case "Education":
      return "Education Details";
    default:
      return "Work Experiences";
  }
};

const FormController = function FormController({
  formData,
  updateFormData,
  addWorkForm,
  addEducationForm,
}) {
  const [currentTab, setCurrentTab] = useState("General");

  return (
    <aside>
      <FormTabs currentTab={currentTab} setTab={setCurrentTab} />
      <h1>{renderHeader(currentTab)}</h1>
      <DynamicFormController
        form={currentTab.toLowerCase()}
        formData={formData}
        updateFormData={updateFormData}
        addWorkForm={addWorkForm}
        addEducationForm={addEducationForm}
      />
    </aside>
  );
};

export default FormController;
