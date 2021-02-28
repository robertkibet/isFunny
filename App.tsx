import React from 'react';
import { View } from 'react-native';
import { Jokes } from './src/views/jokes';
import { containerStyles } from './src/styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from './src/views/homepage/header';


export default function App() {
  return (
    <SafeAreaProvider>
      <View style={containerStyles.index}>
        <View style={containerStyles.wrapper}>
          <Header />
          <Jokes />
        </View>
      </View>
    </SafeAreaProvider>
  );
}
