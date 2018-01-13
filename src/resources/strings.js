/* eslint-disable no-console */

const strings = {
  ar: {
    ACTION_RETRY: "إعادة المحاولة",
  },
  en: {
    ACTION_RETRY: "Retry",
  },
};

export const getString = (stringId, language) => {
  if (!language) {
    console.warn("getString, language is undefined");
    return "";
  }
  if (!strings[language][stringId]) {
    const alternativeLanguage = language === "en" ? "ar" : "en";
    if (!strings[alternativeLanguage][stringId]) {
      console.warn(
        "getString, string not found in any language. ID: ",
        stringId,
      );
      return "";
    }
    console.warn(`getString, string not found in ${language}. ID: `, stringId);
    return strings[alternativeLanguage][stringId];
  }
  return strings[language][stringId];
};

export const getAttribute = (entity, which, language) => {
  if (!entity || !entity.attributes) {
    console.warn("getAttribute, entity is invalid or undefined");
    return "";
  }
  if (!language) {
    console.warn("getAttribute, language is undefined");
    return "";
  }
  if (!entity.attributes[which + "-" + language]) {
    const alternativeLanguage = language === "en" ? "ar" : "en";
    if (!entity.attributes[which + "-" + alternativeLanguage]) {
      return "";
    }
    return entity.attributes[which + "-" + alternativeLanguage];
  }
  return entity.attributes[which + "-" + language];
};
