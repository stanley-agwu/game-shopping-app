export const getRating = (rate: number): number => {
  if (rate < 30) {
    return 1;
  }
  if (rate < 50) {
    return 2;
  }
  if (rate < 80) {
    return 3;
  }
  if (rate < 90) {
    return 4;
  }
  return 5;
};
