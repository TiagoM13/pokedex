export const getFirstLetterCapitalized = (name: string) => {
  const first_letter = name[0].toUpperCase() + name.substring(1);

  return first_letter;
};
