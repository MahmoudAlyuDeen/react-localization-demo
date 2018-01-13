import React from "react";
import { toggleLanguage, withLanguage } from "./language";
import { withDispatch } from "../state/withDispatch";
import { ArabicIcon } from "../resources/drawables/ArabicIcon";
import { EnglishIcon } from "../resources/drawables/EnglishIcon";
import IconButton from "material-ui/IconButton/IconButton";

const LanguageSwitch = ({ language, dispatch }) => {
  const LanguageIcon = language === "en" ? ArabicIcon : EnglishIcon;
  const onClick = () => dispatch(toggleLanguage());
  return (
    <IconButton onClick={onClick}>
      <LanguageIcon />
    </IconButton>
  );
};

export default withLanguage(withDispatch(LanguageSwitch));
