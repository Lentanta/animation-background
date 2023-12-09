export const randomBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * max) + min;
};

export const randomValueIn = <T>(listOfAny: T[]): T => {
  const randomNumber = randomBetween(0, listOfAny.length);
  return listOfAny[randomNumber];
};