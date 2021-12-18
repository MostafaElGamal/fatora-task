import axios from "axios";

export const endPointsInstance = axios.create({
  baseURL: "https://api.giphy.com/v1",
  params: {
    api_key: process.env.VUE_APP_GIPHY_API_KEY,
  },
});

export const uploadInstance = axios.create({
  baseURL: "https://upload.giphy.com/v1",
  params: {
    api_key: process.env.VUE_APP_GIPHY_API_KEY,
  },
});
