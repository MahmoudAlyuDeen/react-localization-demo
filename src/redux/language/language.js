import { connect } from "react-redux";

const toggleLanguageTag = "TOGGLE_LANGUAGE";

export const toggleLanguage = () => ({
  type: toggleLanguageTag,
});

export const languageReducer = (state = "en", action) => {
  switch (action.type) {
    case toggleLanguageTag:
      return state === "en" ? "ar" : "en";

    default:
      return state;
  }
};

export const withLanguage = connect(state => ({ language: state.language }));

export const withDirectionStyle = connect(state => {
  const language = state.language;
  const layoutDirection = language === "en" ? "ltr" : "rtl";
  const directionStyle = { direction: layoutDirection };
  return { directionStyle };
});
