import React, { useState, useEffect } from 'react';
import { Divider } from 'react-native-elements';
import { fetchJokes } from '../api';
import { ActivityIndicator, View } from 'react-native';
import { colors, containerStyles, textStyles } from '../styles';
import { Text } from '../components/text';
import { Icon } from '../components/icon';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from '../components/buttons';

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
    if (joke) {

      return (
        <>
          <Text style={{ ...textStyles.primary, fontSize: 25, minHeight: 300 }} message={joke || `I got no jokes ...loading`} />
        </>
      )
    }
    return (
      <>
        <ActivityIndicator size="small" color={colors.dark} />
        <Text style={{ ...textStyles.primary, paddingTop: 10, fontSize: 15, minHeight: 300 }} message="Ooooweee! Jokes on the way" />
      </>
    )
  }
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
      onPress: () => console.log('shared')
    },
    {
      name: 'content-copy',
      type: 'material',
      onPress: () => console.log('copy')
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
