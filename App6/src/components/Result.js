import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';

const cara = require('../imgs/moeda_cara.png');
const coroa = require('../imgs/moeda_coroa.png');

export default class Result extends Component {
    render() {
        return (
          <View style={styles.result}>
            <Image source={cara} />
            <Image source={coroa} />
          </View>
        );
    }
}

const styles = StyleSheet.create({
  result: {
    flex: 1,
    backgroundColor: '#61BD8C',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
