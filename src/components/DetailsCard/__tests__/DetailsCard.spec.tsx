import React from 'react';

import { act, fireEvent, render } from '@testing-library/react';
import { formatHeightWeight, getNumberOrderFormat } from '@utils';

import { DetailsCard } from '../DetailsCard';

describe('<DetailsCard/>', () => {
  const mockDetailsCard = {
    id: 6,
    name: 'Charizard',
    img: 'http://charizard.png',
    types: [
      {
        type: { name: 'FIRE' },
      },
    ],
    weight: 100,
    height: 100,
    abilities: [
      {
        ability: { name: 'Choque' },
      },
    ],
    stats: [
      {
        base_stat: 100,
        effort: 90,
        stat: { name: 'hp' },
      },
    ],
  };

  it('should render correctly', () => {
    const { getByText, queryAllByText } = render(
      <DetailsCard
        id={mockDetailsCard.id}
        name={mockDetailsCard.name}
        img={mockDetailsCard.img}
        types={mockDetailsCard.types}
        height={mockDetailsCard.height}
        weight={mockDetailsCard.weight}
        abilities={mockDetailsCard.abilities}
        stats={mockDetailsCard.stats}
      />
    );

    // on the screen
    expect(getByText('Info')).toBeTruthy();
    expect(getByText('Stats')).toBeTruthy();
    expect(getByText(mockDetailsCard.name)).toBeTruthy();
    expect(getByText(getNumberOrderFormat(mockDetailsCard.id))).toBeTruthy();
    expect(getByText(mockDetailsCard.types[0].type.name)).toBeTruthy();
    expect(getByText(mockDetailsCard.abilities[0].ability.name)).toBeTruthy();
    expect(
      getByText(`${formatHeightWeight(mockDetailsCard.height)} kg`)
    ).toBeTruthy();
    expect(
      getByText(`${formatHeightWeight(mockDetailsCard.weight)} m`)
    ).toBeTruthy();

    // is not on screen
    expect(
      queryAllByText(mockDetailsCard.stats[0].stat.name).length
    ).not.toBeTruthy();
    expect(
      queryAllByText(mockDetailsCard.stats[0].base_stat).length
    ).not.toBeTruthy();
  });

  it('should render pokemon "stats" data', () => {
    const { getByText, queryAllByText } = render(
      <DetailsCard
        id={mockDetailsCard.id}
        name={mockDetailsCard.name}
        img={mockDetailsCard.img}
        types={mockDetailsCard.types}
        height={mockDetailsCard.height}
        weight={mockDetailsCard.weight}
        abilities={mockDetailsCard.abilities}
        stats={mockDetailsCard.stats}
      />
    );

    expect(getByText('Info')).toBeTruthy();
    expect(getByText('Stats')).toBeTruthy();
    expect(getByText(mockDetailsCard.name)).toBeTruthy();
    expect(getByText(getNumberOrderFormat(mockDetailsCard.id))).toBeTruthy();
    expect(getByText(mockDetailsCard.types[0].type.name)).toBeTruthy();
    expect(getByText(mockDetailsCard.abilities[0].ability.name)).toBeTruthy();
    expect(
      getByText(`${formatHeightWeight(mockDetailsCard.height)} kg`)
    ).toBeTruthy();
    expect(
      getByText(`${formatHeightWeight(mockDetailsCard.weight)} m`)
    ).toBeTruthy();

    act(() => {
      fireEvent.click(getByText('Stats'));
    });

    // on the screen
    expect(getByText('Info')).toBeTruthy();
    expect(getByText('Stats')).toBeTruthy();
    expect(getByText(mockDetailsCard.name)).toBeTruthy();
    expect(getByText(getNumberOrderFormat(mockDetailsCard.id))).toBeTruthy();
    expect(getByText(mockDetailsCard.types[0].type.name)).toBeTruthy();
    expect(getByText('Base Stats')).toBeTruthy();
    expect(getByText(mockDetailsCard.stats[0].stat.name)).toBeTruthy();
    expect(getByText(mockDetailsCard.stats[0].base_stat)).toBeTruthy();

    // is not on screen
    expect(
      queryAllByText(mockDetailsCard.abilities[0].ability.name).length
    ).not.toBeTruthy();
    expect(
      queryAllByText(`${formatHeightWeight(mockDetailsCard.height)} kg`).length
    ).not.toBeTruthy();
    expect(
      queryAllByText(`${formatHeightWeight(mockDetailsCard.weight)} m`).length
    ).not.toBeTruthy();
  });
});
