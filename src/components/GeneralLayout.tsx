import React, { FunctionComponent } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { appTheme } from '../theme/appTheme';
import { NavigationContainer } from '@react-navigation/native';
import { appStateProps } from '../interfaces/generalInterfaces';
import { Navigator } from '../navigator/Navigator';

export const GeneralLayout: FunctionComponent = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="rgba(52, 52, 52, 0.8)" barStyle="light-content" />
      <NavigationContainer theme={appTheme}>
        <AppState>
          <Navigator />
        </AppState>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const AppState: FunctionComponent<appStateProps> = ({ children }) => {
  return <>{children}</>;
};
