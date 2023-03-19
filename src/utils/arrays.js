export const getRandomElement = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

export const createMapFromLength = (length, defaultValue) => {
  return new Map(
    Array.from({ length }).map((_, index) => [index, defaultValue])
  );
};
