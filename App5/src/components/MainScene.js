import React, { Component } from 'react';
import { StatusBar, View, Image } from 'react-native';

import BarNavigation from './BarNavigation';

const logo = require('../imgs/logo.png');
const clientMenu = require('../imgs/menu_cliente.png');
const contactMenu = require('../imgs/menu_contato.png');
const companyMenu = require('../imgs/menu_empresa.png');
const serviceMenu = require('../imgs/menu_servico.png');

export default class App extends Component {
  render() {
    return (
       <View>
        <StatusBar>
          background = '#CCC'
        </StatusBar>

        <BarNavigation />

        <Image source={logo} />
        <Image source={clientMenu} />
        <Image source={contactMenu} />
        <Image source={companyMenu} />
        <Image source={serviceMenu} />
      </View>
    );
  }
}
