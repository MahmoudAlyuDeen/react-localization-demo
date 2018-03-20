import { getAttribute } from "../resources/strings";

export const filterRestaurants = filter => restaurant => {
  if (!filter) return true;
  const {
    attributes: { "title-en": titleEn, "title-ar": titleAr, keywords },
  } = restaurant;
  const searchWords = [...keywords ? keywords : [], titleEn, titleAr].map(word => word.toLowerCase());
  return searchWords.filter(word => word.indexOf(filter.toLowerCase()) !== -1).length > 0;
};

export const getTagsString = (tags, language) => {
  return tags.map(tag => getAttribute(tag, "title", language)).join(language === "en" ? ", " : "،   ");
};