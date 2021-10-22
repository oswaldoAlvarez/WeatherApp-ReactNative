import React, { FunctionComponent } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { RowWeather } from './RowWeather';

interface Props {
  weather: any;
  weatherWeek: any;
}

export const InfoClima5DiasDespues: FunctionComponent<Props> = ({ weather, weatherWeek }) => {
  return (
    <>
      {weatherWeek ? (
        <>
          <Text style={styles.infoClima}>
            Temperatura de ({weather.name}, {weather.sys.country}) en los próximos 5 días:
          </Text>
          <ScrollView horizontal={true}>
            <View style={styles.responseContainer}>
              <RowWeather weather={weatherWeek.list[0].main.temp} descripcion="Primer día después:" signo="°C" />
              <RowWeather weather={weatherWeek.list[1].main.temp} descripcion="Segundo día después:" signo="°C" />
              <RowWeather weather={weatherWeek.list[2].main.temp} descripcion="Tercer día después:" signo="°C" />
              <RowWeather weather={weatherWeek.list[3].main.temp} descripcion="Cuarto día después:" signo="°C" />
              <RowWeather weather={weatherWeek.list[4].main.temp} descripcion="Quinto día después:" signo="°C" />
            </View>
          </ScrollView>
        </>
      ) : (
        <Text>Ha ocurrido un error con el endpoint o la ciudad!</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  responseContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  infoClima: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
    color: 'white',
    textDecorationLine: 'underline'
  },
});
