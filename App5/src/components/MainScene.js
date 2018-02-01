import React, { Component } from 'react';
import { StatusBar, View, Image, StyleSheet, TouchableHighlight } from 'react-native';

import BarNavigation from './BarNavigation';

const logo = require('../imgs/logo.png');
const clientMenu = require('../imgs/menu_cliente.png');
const contactMenu = require('../imgs/menu_contato.png');
const companyMenu = require('../imgs/menu_empresa.png');
const serviceMenu = require('../imgs/menu_servico.png');

export default class MainScene extends Component {
  render() {
    return (
       <View>
        <StatusBar>
          background = '#CCC'
        </StatusBar>

        <BarNavigation />

        <View style={styles.logo}>
          <Image source={logo} />
        </View>
        <View style={styles.images}>
          <View style={styles.imagesGroup}>
            <TouchableHighlight
              onPress={() => {
                this.props.navigation.push({ id: 'b' });
              }}
            >
              <Image style={styles.imageMenu} source={clientMenu} />
            </TouchableHighlight>
            <Image style={styles.imageMenu} source={contactMenu} />
          </View>
          
          <View style={styles.imagesGroup}>
            <Image style={styles.imageMenu} source={companyMenu} />
            <Image style={styles.imageMenu} source={serviceMenu} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  images: {
    marginTop: 20,
    alignItems: 'center'
  },
  imagesGroup: {
    flexDirection: 'row'
  },
  logo: {
    marginTop: 30,
    alignItems: 'center'
  },
  imageMenu: {
    margin: 15
  }
});
