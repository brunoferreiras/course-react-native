import React from 'react';
import { View, Text } from 'react-native';
import Visor from './Visor';

const Result = props => (
  <Visor result={props.result} />
);

export { Result };
