import React from "react";
import { withLanguage } from "../language/language";
import { getAttribute } from "../resources/strings";

const Restaurant = ({ language, restaurant }) => {
  return <h1>{getAttribute(restaurant, "title", language)}</h1>;
};

export default withLanguage(Restaurant);
