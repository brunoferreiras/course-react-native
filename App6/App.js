import React, { Component } from 'react';
import { } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Main from './src/components/Main';
import OthersGames from './src/components/OthersGames';
import AboutGame from './src/components/AboutGame';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Stack key='root'>
          <Scene key='main' component={Main} initial title='Cara ou coroa' />
          <Scene key='aboutGame' component={AboutGame} title='Sobre o jogo' />
          <Scene key='othersGames' component={OthersGames} title='Outros jogos' />
        </Stack>
      </Router>
    );
  }
}
