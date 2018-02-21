import React, { Component } from 'react';
import { View } from 'react-native';
import Input from './Input';
import Operation from './Operation';
import Command from './Command';

class Panel extends Component {

  constructor(props) {
    super(props);

    this.state = { numberOne: '', numberTwo: '' };
    this.calculate = this.calculate.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  calculate() {
    const result = parseFloat(this.state.numberOne) + parseFloat(this.state.numberTwo);
    console.log('Sim, vamos calcular');
  }

  updateValue(name, number) {
    const obj = {};
    obj[name] = number;
    this.setState(obj);
  }

  render() {
    return (
      <View>
        <Input 
          numberOne={this.state.numberOne}
          numberTwo={this.state.numberTwo} 
          updateValue={this.updateValue}
        />
        <Operation />
        <Command action={this.calculate} />
      </View>
    );
  }
} 

export { Panel };
