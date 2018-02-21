import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default props => (
  <TextInput 
    style={styles.number} 
    value={props.number} 
    onChangeText={number => props.updateValue(props.name, number)}  
  />
);

const styles = StyleSheet.create({
  number: {
    fontSize: 20,
    width: 140,
    height: 90
  }
});
