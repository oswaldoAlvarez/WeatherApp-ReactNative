import React from 'react';
import renderer from 'react-test-renderer';
import { InfoClima5DiasDespues } from '../components/InfoClima5DiasDespues';

test('Probando funciones del InfoClima5DiasDespues', () => {
  const tree = renderer.create(<InfoClima5DiasDespues />).toJSON();
  expect(tree).toMatchSnapshot();
});
