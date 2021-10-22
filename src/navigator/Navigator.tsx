import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BeginScreen } from '../views/BeginScreen';
import { IntroScreen } from '../views/IntroScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="IntroScreen" component={IntroScreen} />
      <Stack.Screen name="BeginScreen" component={BeginScreen} />
    </Stack.Navigator>
  );
};
