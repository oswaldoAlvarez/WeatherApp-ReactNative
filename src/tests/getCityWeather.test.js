import React from 'react';
import renderer from 'react-test-renderer';

test('Probando funciones del getCityWeather', () => {
  const tree = renderer.create(<getCityWeather />).toJSON();
  expect(tree).toMatchSnapshot();
});
