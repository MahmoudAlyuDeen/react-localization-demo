import React from "react";
import {
  toggleLanguage,
  withDirectionStyle,
  withLanguage
} from "./language/language";
import { getString } from "./resources/strings";
import { withDispatch } from "./state/withDispatch";

const App = ({ directionStyle, language, dispatch }) => (
  <div style={directionStyle}>
    {getString("HELLO_WORLD", language)}
    <br />
    <button onClick={() => dispatch(toggleLanguage())}>Switch language</button>
  </div>
);

export default withDispatch(withLanguage(withDirectionStyle(App)));
