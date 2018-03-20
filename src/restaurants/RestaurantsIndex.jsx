import React, { Component } from "react";
import { Toolbar } from "./Toolbar";
import RestaurantList from "./RestaurantList";
import { fixedDiv } from "../resources/styles";

export default class Restaurants extends Component {
  state = {
    filter: "",
  };

  handleFilterChange = filter => this.setState(() => ({ filter }));

  render() {
    return (
      <div style={fixedDiv.contentParentStyle}>
        <Toolbar onFilterChange={this.handleFilterChange} {...this.state} />
        <RestaurantList {...this.state} />
      </div>
    );
  }
}
