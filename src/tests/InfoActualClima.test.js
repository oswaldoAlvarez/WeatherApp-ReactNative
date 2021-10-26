import React from 'react';
import renderer from 'react-test-renderer';
import { InfoActualClima } from '../components/InfoActualClima.tsx';

test('Probando funciones del InfoActualClima', () => {
  const tree = renderer.create(<InfoActualClima />).toJSON();
  expect(tree).toMatchSnapshot();
});
