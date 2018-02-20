import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';

const cara = require('../imgs/moeda_cara.png');
const coroa = require('../imgs/moeda_coroa.png');

export default class Result extends Component {
  constructor(props) {
    super(props);

    this.state = { result: '' };
  }

  componentWillMount() {
    const numberRandom = Math.floor(Math.random() * 2);
    let caraOrCoroa = '';

    if (numberRandom === 0) {
      caraOrCoroa = 'cara';
    } else {
      caraOrCoroa = 'coroa';
    }

    this.setState({ result: caraOrCoroa });
  }

  render() {
    if (this.state.result === 'cara') {
      return (
        <View style={styles.result}>
          <Image source={cara} />
        </View>
      );
    } 
    
    return (
      <View style={styles.result}>
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
