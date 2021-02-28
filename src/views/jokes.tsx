import React, { useState, useEffect } from 'react';
import { fetchJokes } from '../api';
import { ActivityIndicator, View, Share } from 'react-native';
import { colors, containerStyles, textStyles } from '../styles';
import { Text } from '../components/text';
import { Icon } from '../components/icon';
import GestureRecognizer from 'react-native-swipe-gestures';
import { Button } from '../components/buttons';
import Clipboard from 'expo-clipboard';
import Toast from 'react-native-simple-toast';

export const Jokes = () => {
  const [joke, setJoke] = useState(null);


  useEffect(() => {
    getJoke();
  }, [])

  const getJoke = async () => {
    const res = await fetchJokes();
    setJoke(res.joke);
  }
  const swipeToNext = () => {
    getJoke()
  }
  const TheJoke = () => {
    return (
      <>
        <Text style={{ ...textStyles.primary, fontSize: 25, minHeight: 300 }} message={joke || `I got no jokes ...loading`} />
      </>
    )
  }
  const copy = () => {
    const text = joke || '';
    Clipboard.setString(`"${text}"\nDownload The Joker app from playstore to enjoy this and more :)`);
    Toast.show('Joke copied. Share away :)');
  }
  const shareThis = async () => {
    try {
      const message = `"${joke}"\nDownload The Joker app from playstore to enjoy this and more :)` || '';
      const result = await Share.share({
        message,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) Toast.show('You just shared a smile away :D');
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        Toast.show('Ooops! Next time be nice and share a smile ;P');
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const buttons = [
    {
      title: 'Next',
      type: 'clear',
      onPress: () => {
        getJoke()
      },
      style: {
        color: colors.dark,
      },
      icon: <Icon icons={[{
        name: 'chevron-forward-outline',
        type: 'ionicon',
      },]} />

    },
  ]
  const icons = [
    {
      name: 'share',
      type: 'material',
      onPress: () => shareThis()
    },
    {
      name: 'content-copy',
      type: 'material',
      onPress: () => copy()
    },
    {
      name: 'bookmark-outline',
      type: 'ionicon',
      onPress: () => console.log('bookmark')
    },
  ]

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  };

  if (joke) {
    return (
      <GestureRecognizer
        onSwipeRight={() => swipeToNext()}
        onSwipeLeft={() => swipeToNext()}
        config={config}
      >
        <View style={containerStyles.landing}>
          <TheJoke />
          <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
            <Button buttons={buttons} />
          </View>
          <View style={containerStyles.shareIcons}>
            <Icon icons={icons} />
          </View>
        </View>
      </GestureRecognizer>
    )
  }
  return (
    <View style={containerStyles.landing}>
      <ActivityIndicator size="small" color={colors.dark} />
      <Text style={{ ...textStyles.primary, paddingTop: 10, fontSize: 15, minHeight: 300 }} message="Ooooweee! Jokes on the way" />
    </View>
  )
}
