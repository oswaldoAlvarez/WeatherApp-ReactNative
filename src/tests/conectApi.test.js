import React from 'react';
import renderer from 'react-test-renderer';

test('Probando funciones del conectApi', () => {
  const tree = renderer.create(<conectApi />).toJSON();
  expect(tree).toMatchSnapshot();
});
