import React, { PureComponent } from "react";
import { withLanguage } from "../language/language";
import { getAttribute } from "../resources/strings";
import Card from "material-ui/Card/Card";
import CardMedia from "material-ui/Card/CardMedia";
import CardContent from "material-ui/Card/CardContent";
import Typography from "material-ui/Typography/Typography";
import { getTagsString } from "./RestaurantHelper";
import { connect } from "react-redux";
import { getRelationship } from "redux-bees";

const parentStyle = {
  margin: 16,
};

const coverStyle = {
  height: 200,
};

@withLanguage
// noinspection JSUnresolvedVariable
@connect((state, props) => ({
  tags: getRelationship(state, props.restaurant, "tags"),
}))
export default class Restaurant extends PureComponent {
  render() {
    return (
      <Card style={parentStyle}>
        <Cover {...this.props} />
        <Info {...this.props} />
      </Card>
    );
  }
}

const Cover = ({
  restaurant: { attributes: { "photo-url": photoUrl, "title-en": titleEn } },
}) => <CardMedia style={coverStyle} image={photoUrl} title={titleEn} />;

const Info = ({ restaurant, language, tags }) => (
  <CardContent>
    <Typography type="headline">
      {getAttribute(restaurant, "title", language)}
    </Typography>

    <Typography>{getTagsString(tags, language)}</Typography>
  </CardContent>
);
