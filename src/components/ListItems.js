import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import Item from './Item';

export default class ListItems extends Component {
  
  componentWillMount() {
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then(response => { console.log(response); })
      .catch(() => { console.log('Erro ao recuperar os dados'); });
  }

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
