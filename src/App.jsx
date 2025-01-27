import { useState } from "react";
import "./App.css";

function Input({ type = "text", name, inputId }) {
  return (
    <>
      <label htmlFor={inputId}>{name}</label>
      <input type={type} id={inputId} />
    </>
  );
}

function Form() {
  return (
    <form>
      <h1>Enter Your Details</h1>
      <div className="inputs">
        <Input name="Name: " inputId={"name"} />
        <Input name="Email: " type="email" inputId={"email"} />
      </div>
    </form>
  );
}

function App() {
  return (
    <>
      <Form />
      <main>Some writing</main>
    </>
  );
}

export default App;
