import "./FormTabs.css";

const LinkTab = function ({ name, active, setTab }) {
  console.log(name, active);
  return (
    <li>
      <button
        className={`tab ${active ? "active" : ""}`}
        onClick={() => {
          if (!active) {
            setTab(name);
          }
        }}
      >
        {name}
      </button>
    </li>
  );
};

const tabs = ["General", "Education", "Work"];

const FormTabs = function ({ currentTab, setTab }) {
  console.log(currentTab);
  return (
    <nav className="tabs-container">
      <ul className="tabs">
        {tabs.map((tab, index) => {
          return (
            <LinkTab
              name={tab}
              active={tab === currentTab}
              key={index}
              setTab={setTab}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default FormTabs;
