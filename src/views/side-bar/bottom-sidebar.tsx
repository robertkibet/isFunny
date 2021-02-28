import React from 'react';
import { Lists } from '../../components/lists';
import { colors } from '../../styles';


export const BottomSideBar = () => {

  const listsBottomBar = [
    {
      divider: true,
      onPress: () => console.log('clicked'),
      icons: [{
        name: 'settings-outline',
        type: 'ionicon',
        color: colors.dark
      }],
      title: 'Settings'
    },
    {
      divider: true,
      onPress: () => console.log('clicked'),
      icons: [{
        name: 'wallet-outline',
        type: 'ionicon',
        color: colors.dark
      }],
      title: 'Support this App on Patreon'
    },
    {
      divider: true,
      onPress: () => console.log('clicked'),
      icons: [{
        name: 'log-out-outline',
        type: 'ionicon',
        color: colors.dark
      }],
      title: 'Sign Out'
    },

  ]
  return (
    <Lists lists={listsBottomBar} />

  )

}