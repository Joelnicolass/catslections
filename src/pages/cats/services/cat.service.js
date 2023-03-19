import { CAT_API, CAT_API_CONFIG } from "./cat.api";

export const getRandomCat = async (
  { size } = {
    size: CAT_API_CONFIG.PARAMS.SIZE.OPTION.LARGE,
  }
) => {
  const { data } = await CAT_API.get(CAT_API_CONFIG.URL_IMAGES_SEARCH, {
    params: {
      [CAT_API_CONFIG.PARAMS.SIZE.NAME]: size,
    },
  });

  return data[0].url;
};
