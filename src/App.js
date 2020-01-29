import React from "react";
import "./App.css";
import Filterize from "./components/Filterize";

function App() {
  const filterDeclaration = {
    searchValue: {
      label: "Suche:",
      type: "text",
      value: "asd",
      placeholder: "Suche",
      validate: (element, value) => true
    },
    own: {
      label: "Nur Eigene:",
      type: "switch",
      value: false,
      validate: (e, v) => true
    },
    status: {
      label: "Status:",
      type: "select",
      value: undefined,
      placeholder: { label: "Bitte Status wählen:", value: undefined },
      validate: (e, v) => true,
      items: [
        {
          label: "OPTION 1",
          value: "OPTION 1"
        },
        {
          label: "OPTION 2",
          value: "OPTION 2"
        },
        {
          label: "OPTION 3",
          value: "OPTION 4"
        }
      ]
    }
  };

  const onChange = () => {};

  return (
    <Filterize
      filterDeclaration={filterDeclaration}
      onChange={onChange}
      data={[]}
    />
  );
}

export default App;
