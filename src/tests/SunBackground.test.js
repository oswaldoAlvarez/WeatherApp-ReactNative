import React from 'react';
import renderer from 'react-test-renderer';
import { SunBackground } from '../components/shared/SunBackground';

test('Probando funciones del SunBackground', () => {
  const tree = renderer.create(<SunBackground />).toJSON();
  expect(tree).toMatchSnapshot();
});
