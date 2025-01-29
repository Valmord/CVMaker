import { useState } from "react";
import "./App.css";
import FormController from "./components/FormController";
import CVPreview from "./components/CVPreview";

function App() {
  const [formData, setFormData] = useState({
    general: [{ id: crypto.randomUUID(), name: "", email: "", phone: "" }],
    workExperience: [
      {
        id: crypto.randomUUID(),
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        active: true,
      },
    ],
    education: [
      {
        id: crypto.randomUUID(),
        school: "",
        degree: "",
        major: "",
        startDate: "",
        endDate: "",
        active: true,
      },
    ],
  });

  const updateFormData = function updateFormData(formType, id, field, value) {
    setFormData((prevData) => {
      const newForms = prevData[formType].map((form) => {
        if (form.id === id) {
          return { ...form, [field]: value };
        }
        return form;
      });
      return { ...prevData, [formType]: newForms };
    });
  };

  const addWorkForm = function addWorkForm() {
    setFormData((prevData) => {
      return {
        ...prevData,
        workExperience: [
          ...prevData.workExperience.map((form) => ({
            ...form,
            active: false,
          })),
          {
            id: crypto.randomUUID(),
            company: "",
            position: "",
            startDate: "",
            endDate: "",
            active: true,
          },
        ],
      };
    });
  };

  const addEducationForm = function addEducationForm() {
    setFormData((prevData) => {
      return {
        ...prevData,
        education: [
          ...prevData.education.map((form) => ({
            ...form,
            active: false,
          })),
          {
            id: crypto.randomUUID(),
            school: "",
            degree: "",
            major: "",
            startDate: "",
            endDate: "",
            active: true,
          },
        ],
      };
    });
  };

  return (
    <>
      <FormController
        formData={formData}
        updateFormData={updateFormData}
        addWorkForm={addWorkForm}
        addEducationForm={addEducationForm}
      />
      <CVPreview formData={formData} />
    </>
  );
}

export default App;
