import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';

const logo = require('../imgs/logo.png');
const btnPlay = require('../imgs/botao_jogar.png');
const btnAboutGame = require('../imgs/sobre_jogo.png');
const btnOthersGames = require('../imgs/outros_jogos.png');

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.showGame}>
          <Image source={logo} />
          <Image source={btnPlay} />
        </View>

        <View style={styles.footer}>
          <Image source={btnAboutGame} />
          <Image source={btnOthersGames} />
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#61BD8C'
  },
  showGame: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
