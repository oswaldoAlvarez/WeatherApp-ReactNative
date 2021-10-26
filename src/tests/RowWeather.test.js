import React from 'react';
import renderer from 'react-test-renderer';
import { RowWeather } from '../components/RowWeather';

test('Probando funciones del RowWeather', () => {
  const tree = renderer.create(<RowWeather />).toJSON();
  expect(tree).toMatchSnapshot();
});
