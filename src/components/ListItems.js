import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import Item from './Item';

export default class ListItems extends Component {
  
  constructor(props) {
    super(props);

    this.state = { listItems: [] };
  }

  componentWillMount() {
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then(response => { this.setState({ listItems: response.data }); })
      .catch(() => { console.log('Erro ao recuperar os dados'); });
  }

  render() {
    return (
      <ScrollView>
          { this.state.listItems.map(item => (<Item key={item.titulo} data={item} />)) }
      </ScrollView>      
    );
  }
}
