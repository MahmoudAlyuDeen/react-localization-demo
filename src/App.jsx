import React from "react";
import { withDirectionStyle, withLanguage, } from "./language/language";
import { getString } from "./resources/strings";
import LanguageSwitch from "./language/LanguageSwitch";

const App = ({ directionStyle, language }) => (
  <div style={directionStyle}>
    {getString("HELLO_WORLD", language)}
    <br />
    <LanguageSwitch />
  </div>
);

export default withLanguage(withDirectionStyle(App));