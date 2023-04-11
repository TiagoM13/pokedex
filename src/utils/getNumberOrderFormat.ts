export const getNumberOrderFormat = (number: number) => {
  const format = number;

  if (format < 10) {
    return `#00${format}`;
  }

  if (format >= 10 && format < 100) {
    return `#0${format}`;
  }

  return `#${format}`;
};
