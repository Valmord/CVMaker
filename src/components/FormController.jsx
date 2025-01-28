import { useState } from "react";
import FormTabs from "./FormTabs";
import GeneralInfoForm from "./GeneralInfoForm";
import WorkForm from "./WorkExperienceForm";
import EducationForm from "./EducationForm";
import "./FormController.css";

const RenderForm = function RenderForm(currentTab) {
  switch (currentTab) {
    case "General":
      return <GeneralInfoForm />;
    case "Education":
      return <EducationForm />;
    default:
      return <WorkForm />;
  }
};

const FormController = function FormController() {
  const [currentTab, setCurrentTab] = useState("General");

  return (
    <aside>
      <FormTabs currentTab={currentTab} setTab={setCurrentTab} />
      {RenderForm(currentTab)}
    </aside>
  );
};

export default FormController;
