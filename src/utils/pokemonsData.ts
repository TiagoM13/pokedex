export const getTypesPokemons = (types: any[]) => {
  if (types[1]) {
    return `${types[0].type.name} | ${types[1].type.name}`;
  }
  return types[0].type.name;
};

export const getPokemonSkills = (skills: any[]) => {
  if (skills[1]) {
    return `${skills[0].ability.name} | ${skills[1].ability.name}`;
  }
  return skills[0].ability.name;
};
