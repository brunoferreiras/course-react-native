import React from 'react';
import { StyleSheet, View } from 'react-native';
import Number from './Number';

export default props => (
  <View style={styles.numbers}>
    <Number />
    <Number />
  </View>
);

const styles = StyleSheet.create({
  numbers: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
