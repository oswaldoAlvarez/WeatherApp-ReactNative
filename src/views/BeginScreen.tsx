import React, { FunctionComponent, useEffect } from 'react';
import { View, StyleSheet, Text, Keyboard } from 'react-native';
import { globalStyles } from '../theme/appTheme';
import { TextInput } from 'react-native-gesture-handler';
import { getCityWeather, getCityWeatherOnWeek } from '../api/getCityWeather';
import { useForm } from '../hooks/useForm';
import { useState } from 'react';
import { InfoActualClima } from '../components/InfoActualClima';
import { InfoClima5DiasDespues } from '../components/InfoClima5DiasDespues';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SunBackground } from '../components/shared/SunBackground';
import { ActivityIndicator } from 'react-native-paper';

export const BeginScreen: FunctionComponent = () => {
  const [weather, setWeather] = useState<any>(undefined);
  const [weatherWeek, setWeatherWeek] = useState<any>(undefined);
  const [isFocused, setIsFocused] = useState(false);
  const { city, onChange } = useForm({
    city: '',
  });

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    if (city === '') {
      setIsFocused(false);
    }
  };

  const handleWeather = (ciudad?: string) => {
    getCityWeather(ciudad ? ciudad : city).then(res => {
      setWeather(res);
    });
    getCityWeatherOnWeek(ciudad ? ciudad : city).then(res => {
      setWeatherWeek(res);
    });
    Keyboard.dismiss();
  };

  useEffect(() => {
    handleWeather('buenos aires');
  }, []);

  if (!weather)
    return (
      <>
        <SunBackground />
        <View style={styles.loadingContainer}>
          <Text style={styles.loading}>Cargando...</Text>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      </>
    );

  return (
    <View style={styles.beginContainer}>
      <SunBackground />
      <View style={globalStyles.globalMargin}>
        <View>
          <TextInput
            style={[styles.input, isFocused ? styles.borderFocus : styles.borderOffFocus]}
            placeholder="Ingresa la ciudad"
            placeholderTextColor="lightgray"
            autoCapitalize="none"
            onChangeText={value => onChange(value, 'city')}
            value={city}
            onFocus={onFocus}
            onBlur={onBlur}
            onSubmitEditing={() => handleWeather()}
          />
          <Text style={styles.icon}>
            <Icon onPress={() => handleWeather()} name="search" size={40} color={isFocused ? '#4798FF' : '#DDE1E6'} />
          </Text>
        </View>
        {weather ? (
          <>
            <View style={styles.tempContainer}>
              <Text style={styles.cityInfo}>
                {weather.name}, {weather.sys.country}
              </Text>
              <Text style={styles.tempActual}>{Math.trunc(weather.main.temp)}°C</Text>
            </View>
            <View>
              <InfoActualClima weather={weather} />
              <InfoClima5DiasDespues weather={weather} weatherWeek={weatherWeek} />
            </View>
          </>
        ) : (
          <View style={styles.responseContainer}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  beginContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  input: {
    borderWidth: 2,
    padding: 12,
    borderRadius: 5,
    fontSize: 16,
    height: 48,
    color: 'gray',
    backgroundColor: 'white',
  },
  borderFocus: {
    borderColor: '#4798FF',
  },
  borderOffFocus: {
    borderColor: '#DDE1E6',
  },
  responseContainer: {
    height: 700,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  descriptionError: {
    marginTop: 200,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  tempActual: {
    fontSize: 60,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
    color: 'white',
  },
  tempContainer: {
    padding: 10,
    marginTop: 50,
    marginBottom: 200,
  },
  cityInfo: {
    fontSize: 18,
    fontFamily: 'sans-serif-condensed',
    color: 'white',
  },
  icon: {
    position: 'absolute',
    top: -4,
    right: 0,
    paddingRight: 10,
    width: 30,
    zIndex: 2,
  },
  loading: {
    fontSize: 40,
    color: 'white',
    marginBottom: 30,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
