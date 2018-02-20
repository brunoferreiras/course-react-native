import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Main from './components/Main';
import OthersGames from './components/OthersGames';
import AboutGame from './components/AboutGame';
import Result from './components/Result';

const Routes = () => (
    <Router>
      <Stack key='root'>
        <Scene key='main' component={Main} initial title='Cara ou coroa' />
        <Scene key='aboutGame' component={AboutGame} title='Sobre o jogo' />
        <Scene key='othersGames' component={OthersGames} title='Outros jogos' />
        <Scene key='result' component={Result} title='Resultado' />
      </Stack>
    </Router>
  );

export default Routes;
