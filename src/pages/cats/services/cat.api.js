import axios from "axios";

export const CAT_API_CONFIG = {
  URL_BASE: "https://api.thecatapi.com/v1",
  URL_IMAGES_SEARCH: "/images/search",
  HEADERS: {
    "x-api-key": import.meta.env.VITE_CAT_API_KEY,
  },
  PARAMS: {
    SIZE: {
      NAME: "size",
      OPTION: {
        SMALL: "small",
        MEDIUM: "med",
        LARGE: "full",
        THUMBNAIL: "thumb",
      },
    },
  },
};

export const CAT_API = axios.create({
  baseURL: CAT_API_CONFIG.URL_BASE,
  headers: CAT_API_CONFIG.HEADERS,
});
