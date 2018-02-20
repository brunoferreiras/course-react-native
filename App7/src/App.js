import React from 'react';
import { View } from 'react-native';
import Top from './components/Top';
import Result from './components/Result';
import Panel from './components/Panel';

export default props => (
  <View>
    <Top />
    <Result />
    <Panel />
  </View>
);
