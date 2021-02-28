import React, { useState, useEffect } from 'react';
import { Divider } from 'react-native-elements';
import { fetchJokes } from '../api';
import { ActivityIndicator, View } from 'react-native';
import { colors, containerStyles, textStyles } from '../styles';
import { Text } from '../components/text';
import { Icon } from '../components/icon';

export const Jokes = () => {
  const [joke, setJoke] = useState(null);


  useEffect(() => {
    getJoke();
  }, [])

  const getJoke = async () => {
    const res = await fetchJokes();
    setJoke(res.joke);
  }
  const TheJoke = () => {
    if (joke) return <Text style={{ ...textStyles.primary, fontSize: 25, minHeight: 300 }} message={joke || `I got no jokes ...loading`} />
    return (
      <>
        <ActivityIndicator size="small" color={colors.dark} />
        <Text style={{ ...textStyles.primary, paddingTop: 10, fontSize: 15, minHeight: 300 }} message="Ooooweee! Jokes on the way" />
      </>
    )
  }
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
  return (
    <View style={containerStyles.landing}>
      <TheJoke />
      <Divider />
      <View style={containerStyles.shareIcons}>
        <Icon icons={icons} />
      </View>
    </View>
  )
}
