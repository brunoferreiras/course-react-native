import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';

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
          <TouchableHighlight>
            <Image source={btnPlay} />
          </TouchableHighlight>
        </View>

        <View style={styles.footer}>
          <TouchableHighlight
            onPress={() => { Actions.aboutGame(); }}
          >
            <Image source={btnAboutGame} />
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => { Actions.othersGames(); }}
          >
            <Image source={btnOthersGames} />
          </TouchableHighlight>
          
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
