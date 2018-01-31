import React, { Component } from 'react';
import { View } from 'react-native';

import Item from './Item';

export default class ListItems extends Component {
  
  render() {
    console.log('Objeto é renderizado.');
    return (
      <View>
          <Item />
          <Item />
          <Item />
      </View>      
    );
  }
}
