import React from 'react';
import { View } from 'react-native';
import { Jokes } from './src/views/jokes';
import { colors, containerStyles } from './src/styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Icon } from 'react-native-elements';

const Header = () => {
  return (
    <View style={containerStyles.header}>
      <Icon
        type="ionicon"
        name="menu-outline"
        color={colors.dark}
        size={30}
        onPress={() => { }}
      />
    </View>
  )
}
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
