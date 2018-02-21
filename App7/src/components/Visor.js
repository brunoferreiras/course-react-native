import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default props => (
  <View>
    <TextInput 
      style={styles.input}
      placeholder='Resultado'
      editable={false}
      value={props.result}
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    fontSize: 30,
    height: 100,
    textAlign: 'center'
  }
});
