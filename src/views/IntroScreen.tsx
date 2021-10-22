import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { globalStyles } from '../theme/appTheme';
import { SunBackground } from '../components/shared/SunBackground';

interface Props extends StackScreenProps<any, any> {}

export const IntroScreen = ({ navigation }: Props) => {
  return (
    <View style={[styles.container, globalStyles.globalMargin]}>
      <SunBackground />
      <Text style={styles.textIntro}>Bienvenido a WeatherApp</Text>
      <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.replace('BeginScreen')}>
        <View style={styles.btnIntro}>
          <Text style={styles.textBtn}>Buscar Clima</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textIntro: {
    fontSize: 30,
    fontFamily: 'sans-serif',
    color: 'white',
    marginBottom: 60,
  },
  btnIntro: {
    padding: 20,
    backgroundColor: '#FD7C23',
    borderRadius: 12,
  },
  textBtn: {
    fontSize: 20,
    color: 'white',
  },
});
