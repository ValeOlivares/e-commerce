export const getRandomPrice = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};