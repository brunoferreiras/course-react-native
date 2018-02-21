import React, { Component } from 'react';
import { Picker, StyleSheet } from 'react-native';

export default class Operation extends Component {
  render() {
    return (
      <Picker
        style={styles.operation}
        selectedValue={this.props.operation}
        onValueChange={option => { this.props.updateOperation(option); }}
      >
        <Picker.Item label='Soma' value='sum' />
        <Picker.Item label='Subtração' value='sub' />
      </Picker>
    );
  }
}

const styles = StyleSheet.create({
  operation: {
    marginTop: 15,
    marginBottom: 15
  }
});
