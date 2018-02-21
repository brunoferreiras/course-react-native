import React, { Component } from 'react';
import { View } from 'react-native';
import Input from './Input';
import Operation from './Operation';
import Command from './Command';

const Panel = props => (
  <View>
    <Input 
      numberOne={props.numberOne}
      numberTwo={props.numberTwo} 
      updateValue={props.updateValue}
    />
    <Operation 
      operation={props.operation}
      updateOperation={props.updateOperation}
    />
    <Command action={props.calculate} />
  </View>
);

export { Panel };
