import React from "react";
import { get, set } from "lodash";
import Select from "react-select";
import Switch from "react-switch";
export default function Filterize({
  onChange,
  data,
  filterDeclaration
}) {
  const handleChange = (key, value) => {
    set(filterDeclaration, key, value);
    onChange(filterDeclaration);
  };

  const renderTextInput = ({
    values,
    path,
    placeholder
  }) => {
    return React.createElement("div", {
      key: path
    }, React.createElement("input", {
      placeholder: placeholder,
      value: get(values, "value", ""),
      onChange: event => handleChange(path, event.target.value)
    }));
  };

  const renderSelect = ({
    values,
    path
  }) => {
    return React.createElement("div", {
      key: path
    }, React.createElement("label", null, get(values, "label")), React.createElement("div", null, React.createElement(Select, {
      onValueChange: input => handleChange(path, input),
      value: get(values, "value"),
      options: get(values, "items", [])
    })));
  };

  const renderSwitch = ({
    values,
    path
  }) => {
    return React.createElement("div", {
      key: path
    }, React.createElement("label", null, get(values, "label")), React.createElement(Switch, {
      onChange: input => handleChange(path, input),
      checked: get(values, "value")
    }));
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
      let {
        type,
        placeholder
      } = values;
      let render = get(filterTypes, type, () => {});
      return render({
        values,
        path,
        placeholder
      });
    });
  };

  return React.createElement("div", {
    style: {}
  }, renderItems());
}