import React, { Component } from 'react';
import { StatusBar, View, Image, Text } from 'react-native';

import BarNavigation from './BarNavigation';

const detailsClients = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class ClientScene extends Component {
  render() {
    return (
       <View>
        <StatusBar>
          background = '#CCC'
        </StatusBar>

        <BarNavigation />
        
        <Image source={detailsClients} />
        <Text>Nossos clientes</Text>
        <Image source={cliente1} />
        <Text>cliente 1</Text>
        <Image source={cliente2} />
        <Text>cliente 2</Text>
      </View>
    );
  }
}
