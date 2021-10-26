import React from 'react';
import renderer from 'react-test-renderer';

test('Probando funciones del generalInterfaces', () => {
  const tree = renderer.create(<generalInterfaces />).toJSON();
  expect(tree).toMatchSnapshot();
});
