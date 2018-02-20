import React, { Component } from 'react';
import { View } from 'react-native';
import Input from './Input';
import Operation from './Operation';
import Command from './Command';

class Panel extends Component {

  constructor(props) {
    super(props);

    this.state = { numberOne: '10', numberTwo: '25' };
  }

  calculate() {
    console.log('Sim, vamos calcular');
  }

  render() {
    return (
      <View>
        <Input numberOne={this.state.numberOne} numberTwo={this.state.numberTwo} />
        <Operation />
        <Command action={this.calculate} />
      </View>
    );
  }
} 

export { Panel };
