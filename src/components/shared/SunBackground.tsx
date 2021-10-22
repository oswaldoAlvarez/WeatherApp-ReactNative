import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const SunBackground = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#FFCC45',
    top: -250,
    right: -300,
    width: 500,
    height: 500,
    borderRadius: 500,
    transform: [{ rotate: '-50deg' }],
  },
});
