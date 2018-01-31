import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class Item extends Component {
  
  render() {
    return (
      <View style={styles.item}>
        <View style={styles.image}>
          <Image style={{ height: 100, width: 100 }} source={{ uri: this.props.data.foto }} />
        </View>
        
        <View style={styles.detailsItem}>
          <Text style={styles.title}>{this.props.data.titulo}</Text>
          <Text style={styles.value}>R$ {this.props.data.valor}</Text>
          <Text style={styles.detailsText}>Local: {this.props.data.local_anuncio}</Text>
          <Text style={styles.detailsText}>Data publicação: {this.props.data.data_publicacao}</Text>
        </View>
      </View>      
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    borderWidth: 0.5,
    borderColor: '#999',
    margin: 10,
    padding: 10,
    flexDirection: 'row'
  },
  image: {
    width: 102,
    height: 102
  },
  detailsItem: {
    marginLeft: 20,
    flex: 1
  },
  title: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 5
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  detailsText: {
    fontSize: 16,
  }
});
