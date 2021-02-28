import React, { useEffect } from 'react';
import { View, BackHandler, Alert } from 'react-native';
import { Jokes } from './src/views/jokes';
import { containerStyles } from './src/styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from './src/views/homepage/header';
import Toast from 'react-native-simple-toast';

let backHandlerClickCount = 0;


export default function App() {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backButtonHandler);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backButtonHandler);
    };
  }, []);


  const backButtonHandler = () => {
    const shortToast = message => {
      Toast.show(message);
    }

    backHandlerClickCount += 1;
    if ((backHandlerClickCount < 2)) {
      shortToast('Press again to quit the application');
    } else {
      BackHandler.exitApp();
    }
    setTimeout(() => {
      backHandlerClickCount = 0;
    }, 5000);

    return true;
  }

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
