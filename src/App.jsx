import React from "react";
import { withDirectionStyle } from "./language/language";
import { withDispatch } from "./state/withDispatch";
import Restaurants from "./restaurants/RestaurantsIndex";
import { fixedDiv } from "./resources/styles";

const App = ({ directionStyle }) => (
  <div style={{ ...directionStyle, ...fixedDiv.appParentStyle }}>
    <Restaurants />
  </div>
);

export default withDispatch(withDirectionStyle(App));
