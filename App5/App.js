import React, { Component } from 'react';
import { View } from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';

import MainScene from './src/components/MainScene';
import ClientScene from './src/components/ClientScene';

export default class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'a' }}
        renderScene={(route, navigator) => {
          if (route.id === 'a') {
            return (<MainScene />);
          }

          if (route.id === 'b') {
            return (<ClientScene />);
          }
        }}
      />
    );
  }
}
