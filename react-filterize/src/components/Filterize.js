import React from "react";
import { get, set } from "lodash";
import Select from "react-select";
import Switch from "react-switch";

export default function Filterize({ onChange, data, filterDeclaration }) {
  const handleChange = (key, value) => {
    set(filterDeclaration, key, value);
    onChange(filterDeclaration);
  };
  const renderTextInput = ({ values, path, placeholder }) => {
    return (
      <div key={path}>
        {/* <Icon name="ios-search" /> */}
        <input
          placeholder={placeholder}
          value={get(values, "value", "")}
          onChange={event => handleChange(path, event.target.value)}
        />
        {/* <Icon
          name="times"
          type="FontAwesome5"
          onPress={() => handleChange(path, "")}
        /> */}
      </div>
    );
  };

  const renderSelect = ({ values, path }) => {
    return (
      <div key={path}>
        <label>{get(values, "label")}</label>
        <div>
          <Select
            onValueChange={input => handleChange(path, input)}
            value={get(values, "value")}
            options={get(values, "items", [])}
          />
        </div>
      </div>
    );
  };

  const renderSwitch = ({ values, path }) => {
    return (
      <div key={path}>
        <label>{get(values, "label")}</label>
        <Switch
          onChange={input => handleChange(path, input)}
          checked={get(values, "value")}
        />
      </div>
    );
  };

  const renderItems = () => {
    const filterTypes = {
      switch: renderSwitch,
      select: renderSelect,
      text: renderTextInput
    };

    return Object.keys(filterDeclaration).map(filterKey => {
      let values = filterDeclaration[filterKey];
      let path = `${filterKey}.value`;
      let { type, placeholder } = values;
      let render = get(filterTypes, type, () => {});
      return render({ values, path, placeholder });
    });
  };

  return <div style={{}}>{renderItems()}</div>;
}
