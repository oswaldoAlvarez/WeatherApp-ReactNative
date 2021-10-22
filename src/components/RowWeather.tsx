import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  weather: any;
  descripcion: string;
  signo?: string;
}

export const RowWeather: FunctionComponent<Props> = ({ weather, descripcion, signo }) => {
  return (
    <View style={styles.rowWeather}>
      <Text style={styles.descriptionWeather}>{descripcion}</Text>
      <Text style={styles.weather}>
        {weather}
        {signo}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rowWeather: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 20,
    padding: 10,
  },
  descriptionWeather: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
    color: 'white',
  },
  weather: {
    fontSize: 17,
    color: 'white',
  },
});
