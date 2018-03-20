import { buildApi, get } from "redux-bees";

const apiEndpoints = {
  getRestaurants: { method: get, path: "/tags/1/restaurants" },
};

const envBaseUrl = process.env.REACT_APP_DISCOVERY_ORDERING_URL;

const baseApiUrl = `https://${envBaseUrl}/`;

const config = { baseUrl: baseApiUrl };

export const api = buildApi(apiEndpoints, config);
