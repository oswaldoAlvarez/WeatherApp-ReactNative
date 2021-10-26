import React from 'react';
import renderer from 'react-test-renderer';

test('Probando funciones del iconInterface', () => {
  const tree = renderer.create(<iconInterface />).toJSON();
  expect(tree).toMatchSnapshot();
});
