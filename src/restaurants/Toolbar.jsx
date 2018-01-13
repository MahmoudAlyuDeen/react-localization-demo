import React from "react";
import LanguageSwitch from "../language/LanguageSwitch";
import Search from "material-ui-icons/Search";
import Input from "material-ui/Input/Input";
import { topShadowStyle } from "../resources/styles";

const parentStyle = {
  ...topShadowStyle,
  height: 56,
  background: "white",
  display: "flex",
  alignItems: "center",
};

const searchIconStyle = {
  opacity: 0.54,
  width: 24,
  height: 24,
  margin: "0 8px",
};

const inputStyle = {
  height: "min-content",
  flex: 1,
};

export const Toolbar = props => (
  <div style={parentStyle}>
    <SearchIcon />
    <FilterInput {...props} />
    <LanguageSwitch />
  </div>
);

const SearchIcon = () => <Search style={searchIconStyle} />;

const FilterInput = ({ filter, onFilterChange }) => (
  <Input
    style={inputStyle}
    value={filter}
    onChange={event => onFilterChange(event.target.value)}
  />
);
