import React, { Component } from 'react';
import { View } from 'react-native';
import { Top, Result, Panel } from './components';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { numberOne: '', numberTwo: '', operation: 'sum', result: '' };
    this.calculate = this.calculate.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.updateOperation = this.updateOperation.bind(this);
  }

  calculate() {
    let result = 0;
    switch (this.state.operation) {
      case 'sum':
        result = parseFloat(this.state.numberOne) + parseFloat(this.state.numberTwo);
        break;
      case 'sub':
        result = parseFloat(this.state.numberOne) - parseFloat(this.state.numberTwo);
        break;
      default:
        result = 0;
    }

    this.setState({ result: result.toString() });
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
        <Top />
        <Result result={this.state.result} />
        <Panel 
          numberOne={this.state.numberOne}
          numberTwo={this.state.numberTwo}
          operation={this.state.operation}
          calculate={this.calculate}
          updateOperation={this.updateOperation}
          updateValue={this.updateValue}
        />
      </View>
    );
  }
}