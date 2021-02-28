import React from 'react';
import { View } from 'react-native';
import { Jokes } from './src/views/jokes';
import { containerStyles } from './src/styles';

export default function App() {
  return (
    <View style={containerStyles.index}>
      <View style={containerStyles.wrapper}>
        <Jokes />
      </View>
    </View>
  );
}
