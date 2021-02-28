import React from 'react';
import { View } from 'react-native';
import { Lists } from '../../components/lists';
import { colors } from '../../styles';


export const TopSideBar = () => {

  const listsTopBar = [
    {
      divider: true,
      onPress: () => console.log('clicked'),
      icons: [{
        name: 'bookmarks-outline',
        type: 'ionicon',
        color: colors.dark
      }],
      title: 'Saved Items'
    },
    {
      divider: true,
      onPress: () => console.log('clicked'),
      icons: [{
        name: 'medal-outline',
        type: 'ionicon',
        color: colors.dark
      }],
      title: 'Charts'
    },
    {
      divider: true,
      onPress: () => console.log('clicked'),
      icons: [{
        name: 'happy-outline',
        type: 'ionicon',
        color: colors.dark
      }],
      title: 'Share a Joke'
    },
  ]
  return (
    <View style={{ paddingTop: 60, marginBottom: 20 }} >
      <Lists lists={listsTopBar} />
    </View>

  )

}