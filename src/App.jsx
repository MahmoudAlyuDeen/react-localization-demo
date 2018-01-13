import React, { PureComponent } from "react";
import {
  toggleLanguage,
  withDirectionStyle,
  withLanguage,
} from "./redux/language/language";
import { getString } from "./resources/strings";
import { withDispatch } from "./redux/withDispatch";

@withLanguage
@withDispatch
@withDirectionStyle
export default class App extends PureComponent {
  render() {
    const { language, dispatch, directionStyle } = this.props;
    return (
      <div style={directionStyle}>
        {getString("HELLO_WORLD", language)}
        <br />
        <button onClick={() => dispatch(toggleLanguage())}>
          Switch language
        </button>
      </div>
    );
  }
}
