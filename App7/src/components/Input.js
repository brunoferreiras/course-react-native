import React from 'react';
import { StyleSheet, View } from 'react-native';
import Number from './Number';

export default props => (
  <View style={styles.numbers}>
    <Number number={props.numberOne} updateValue={props.updateValue} name='numberOne' />
    <Number number={props.numberTwo} updateValue={props.updateValue} name='numberTwo' />
  </View>
);

const styles = StyleSheet.create({
  numbers: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
