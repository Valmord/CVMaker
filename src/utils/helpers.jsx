const Input = function InputComponent({
  type = "text",
  name,
  inputId,
  value,
  onChange,
  placeholder,
  pattern,
}) {
  return (
    <>
      <label htmlFor={inputId}>{name}</label>
      <input
        type={type}
        id={inputId}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        pattern={pattern}
      />
    </>
  );
};

export default Input;
