import React from 'react';
import { Picker, Text, StyleSheet } from 'react-native';

export default props => (
  <Picker style={styles.operation}>
    <Picker.Item label='Soma' value='sum' />
    <Picker.Item label='Subtração' value='sub' />
  </Picker>
);

const styles = StyleSheet.create({
  operation: {
    marginTop: 15,
    marginBottom: 15
  }
});
