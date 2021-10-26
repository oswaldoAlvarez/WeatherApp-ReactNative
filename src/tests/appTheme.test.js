import React from 'react';
import renderer from 'react-test-renderer';

test('Probando funciones del appTheme', () => {
  const tree = renderer.create(<appTheme />).toJSON();
  expect(tree).toMatchSnapshot();
});
