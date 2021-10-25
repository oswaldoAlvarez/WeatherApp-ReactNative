import React, { FunctionComponent } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { RowWeather } from './RowWeather';

interface Props {
  infoTitulo: string;
  weather: any;
}

export const InfoActualClima: FunctionComponent<Props> = ({ infoTitulo, weather }) => {
  if (!weather) return <Text style={[styles.loading, styles.marginBottom30, styles.marginTop50]}>Cargando...</Text>;
  return (
    <>
      {weather ? (
        <>
          <Text style={styles.infoClima}>{infoTitulo}</Text>
          <ScrollView horizontal={true}>
            <View style={styles.responseContainer}>
              <RowWeather weather={weather.name} descripcion="Ciudad:" />
              <RowWeather weather={weather.sys.country} descripcion="País:" />
              <RowWeather weather={weather.main.temp} descripcion="Temperatura Actual:" signo="°C" />
              <RowWeather weather={weather.main.temp_min} descripcion="Temperatura mínima de hoy:" signo="°C" />
              <RowWeather weather={weather.main.temp_max} descripcion="Temperatura máxima de hoy:" signo="°C" />
              <RowWeather weather={weather.main.feels_like} descripcion="Sensación térmica:" signo="°C" />
              <RowWeather weather={weather.clouds.all} descripcion="Nubocidad:" signo="%" />
              <RowWeather weather={weather.wind.speed} descripcion="Viento:" signo="K/H" />
              <RowWeather weather={weather.main.humidity} descripcion="Humedad:" signo="%" />
              <RowWeather weather={weather.weather[0].main} descripcion="Clima:" />
              <RowWeather weather={weather.weather[0].description} descripcion="Descripción del Clima:" />
            </View>
          </ScrollView>
        </>
      ) : (
        <Text style={[styles.loading, styles.marginBottom30]}>Ha ocurrido un error con el endpoint o la ciudad!</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  infoClima: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
    color: 'white',
    textDecorationLine: 'underline',
  },
  responseContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 10,
  },
  loading: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
  marginTop50: {
    marginTop: 50,
  },
  marginBottom30: {
    marginBottom: 30,
  },
});
