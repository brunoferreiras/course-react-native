import React, { Component } from 'react';
import {
  Text, StyleSheet, View
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.barTitle}>
        <Text style={styles.title}>ATM Consultoria</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  barTitle: {
    backgroundColor: '#CCC',
    padding: 10,
    height: 60
  },
  title: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#000'
  }
});
