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

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long", // e.g., "January"
    year: "numeric", // e.g., "2025"
  });
};

export default Input;
export { formatDate };
