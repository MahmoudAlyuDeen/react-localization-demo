import React, { PureComponent } from "react";
import { fixedDiv } from "../resources/styles";
import { query } from "redux-bees";
import { api } from "../api/client";
import { filterRestaurants } from "./RestaurantHelper";
import Restaurant from "./Restaurant";
import Button from "material-ui/Button/Button";
import { getString } from "../resources/strings";
import CircularProgress from "material-ui/Progress/CircularProgress";
import { withLanguage } from "../language/language";

class RestaurantList extends PureComponent {
  render() {
    const { restaurants } = this.props;
    return (
      <div style={fixedDiv.contentParentStyle}>
        {restaurants && <Content {...this.props} />}
        {!restaurants && <Status {...this.props} />}
      </div>
    );
  }
}

const Content = ({ restaurants, filter }) => (
  <div style={fixedDiv.contentStyle}>
    {restaurants
      .filter(filterRestaurants(filter))
      .map(restaurant => (
        <Restaurant
          key={`restaurant,${restaurant.id}`}
          restaurant={restaurant}
        />
      ))}
  </div>
);

const Status = ({
  status: { restaurants: { hasFailed, refetch } },
  language,
}) => (
  <div style={fixedDiv.centerContentStyle}>
    {hasFailed ? (
      <Button raised color="primary" onClick={() => refetch()}>
        {getString("ACTION_RETRY", language)}
      </Button>
    ) : (
      <CircularProgress />
    )}
  </div>
);

export default withLanguage(
  query("restaurants", api.getRestaurants)(RestaurantList),
);
