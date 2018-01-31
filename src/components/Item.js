import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class Item extends Component {
  
  render() {
    return (
      <View>
        <Image style={{ height: 100, width: 100 }} source={{ uri: this.props.data.foto }} />
        <Text>{this.props.data.titulo}</Text>
        <Text>{this.props.data.valor}</Text>
        <Text>{this.props.data.local_anuncio}</Text>
        <Text>{this.props.data.data_publicacao}</Text>
      </View>      
    );
  }
}
