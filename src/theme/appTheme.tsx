import { StyleSheet } from 'react-native';
import { DefaultTheme } from '@react-navigation/native';

export const globalStyles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
  container: {
    flex: 1,
  },
});

export const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#4598FF',
  },
};
