import React from 'react';
import renderer from 'react-test-renderer';

test('Probando funciones del useForm', () => {
  const tree = renderer.create(<useForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
