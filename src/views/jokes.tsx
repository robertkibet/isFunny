import React, { useState, useEffect } from 'react';
import { Button, Divider, Icon } from 'react-native-elements';
import { fetchJokes } from '../api';
import { View } from 'react-native';
import { buttonStyles, colors, containerStyles, textStyles } from '../styles';
import { iconStyles } from '../styles/icons';
import { Text } from '../components/text';

export const Jokes = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [joke, setJoke] = useState(null);

  const buttons = ['Prev', 'Next']

  useEffect(() => {
    getJoke();
  }, [])

  const getJoke = async () => {
    const res = await fetchJokes();
    setJoke(res.joke);
  }
  return (
    <View style={containerStyles.landing}>
      <Text style={{...textStyles.primary, fontSize:30, minHeight:300}} message={joke}/>
      <Divider />
      <View style={containerStyles.shareIcons}>
        <Icon
          name='share'
          type='material'
          onPress={()=>console.log('shared')}
        />
        <Icon
          name='content-copy'
          type='material'
          onPress={()=>console.log('copied')}
        />
        <Icon
          name='bookmark-outline'
          type='ionicon'
          onPress={()=>console.log('bookmark')}
        />
      </View>

      <View style={containerStyles.buttonBottom}>
        <Button
          title="Outline button"
          type="outline"
          onPress={() => getJoke()}
          buttonStyle={buttonStyles.landing}
          titleStyle={textStyles.primaryButton}
        />
      </View>
    </View>
  )
}
