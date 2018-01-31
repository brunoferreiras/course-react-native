import React, { Component } from 'react';
import { StatusBar, View, Image, Text, StyleSheet } from 'react-native';

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

        <View style={styles.detailsClients}>
          <Image source={detailsClients} />
          <Text style={styles.title}>Nossos Clientes</Text>
        </View>
        
        <View style={styles.clientGroup}>
          <Image source={cliente1} />
          <Text style={styles.textGroup}>cliente 1</Text>
        </View>

        <View style={styles.clientGroup}>
          <Image source={cliente2} />
          <Text style={styles.textGroup}>cliente 2</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  detailsClients: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    color: '#B9C941',
    marginLeft: 10
  },
  clientGroup: {
    marginTop: 10,
    padding: 20
  },
  textGroup: {
    fontSize: 18,
    marginLeft: 20
  }
});
