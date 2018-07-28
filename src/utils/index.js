export const randomIndex = (max, min) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const compare = (array1, array2) => {
  if (array1 === array2) {
    return true;
  }

  if (array1 === null || array2 === null) {
    return false;
  }

  for (let i = 0; i < array2.length; ++i) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};
