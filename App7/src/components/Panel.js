import React, { Component } from 'react';
import { View } from 'react-native';
import Input from './Input';
import Operation from './Operation';
import Command from './Command';

class Panel extends Component {

  constructor(props) {
    super(props);

    this.state = { numberOne: '', numberTwo: '', operation: 'sum' };
    this.calculate = this.calculate.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.updateOperation = this.updateOperation.bind(this);
  }

  calculate() {
    switch (this.state.operation) {
      case 'sum':
        return parseFloat(this.state.numberOne) + parseFloat(this.state.numberTwo);
      case 'sub':
        return parseFloat(this.state.numberOne) - parseFloat(this.state.numberTwo);
      default:
        return parseFloat(this.state.numberOne) + parseFloat(this.state.numberTwo);
    }
  }

  updateValue(name, number) {
    const obj = {};
    obj[name] = number;
    this.setState(obj);
  }

  updateOperation(operation) {
    this.setState({ operation });
  }

  render() {
    return (
      <View>
        <Input 
          numberOne={this.state.numberOne}
          numberTwo={this.state.numberTwo} 
          updateValue={this.updateValue}
        />
        <Operation 
          operation={this.state.operation}
          updateOperation={this.updateOperation}
        />
        <Command action={this.calculate} />
      </View>
    );
  }
} 

export { Panel };
