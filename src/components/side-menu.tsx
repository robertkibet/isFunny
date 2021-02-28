import React from 'react';
import { View, } from 'react-native'
import { ListItem, Icon, Button } from 'react-native-elements'
import { colors, height, width } from '../styles';
import { Text } from './text';

const list = [
  {
    title: 'Saved Jokes',
    icon: 'save-outline'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
]

export const SideMenu = () => {
  return (
    <View
      style={{
        position: 'absolute',
        width: width,
        zIndex: 1,
        height: height,
        backgroundColor: colors.grey
      }}
    >
      <View
        style={{ paddingTop: 60, marginBottom: 20 }}
      >
        {
          list.map((item, i) => (
            <ListItem key={i} bottomDivider onPress={() => console.log('clicked')}>
              <Icon name={item.icon} type="ionicon" color={colors.dark} />
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          ))
        }
      </View>
      <View style={{ marginBottom: 20 }} >
        <ListItem bottomDivider onPress={() => console.log('clicked')}>
          <Icon name="settings-outline" type="ionicon" color={colors.dark} />
          <ListItem.Content>
            <ListItem.Title>Settings</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider onPress={() => console.log('clicked')}>
          <Icon name="log-out-outline" type="ionicon" color={colors.dark} />
          <ListItem.Content>
            <ListItem.Title>Sign Out</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </View>
      <View
        style={{ marginBottom: 20, position: 'absolute', bottom: 0, width: '100%' }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            paddingBottom: 20,
          }}
        >
          <Text message="Login" style={{ fontSize: 15 }} />
          <Text message="to save your content" style={{ fontSize: 12, }} />

        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            paddingBottom: 20,
          }}
        >
          <Button
            title="Twitter"
            buttonStyle={{
              backgroundColor: '#00acee',
            }}
          />
          <Button
            title="Google"
            buttonStyle={{
              backgroundColor: '#DB4437',
            }}
          />
          <Button
            title="Facebook"
            buttonStyle={{
              backgroundColor: '#3b5998',
            }}
          />
        </View>
        
        <ListItem bottomDivider onPress={() => console.log('clicked')}>
          <Icon name="settings-outline" type="ionicon" color={colors.dark} />
          <ListItem.Content>
            <ListItem.Title>Settings</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider onPress={() => console.log('clicked')}>
          <Icon name="wallet-outline" type="ionicon" color={colors.dark} />
          <ListItem.Content>
            <ListItem.Title>Support this App on Patreon</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider onPress={() => console.log('clicked')}>
          <Icon name="log-out-outline" type="ionicon" color={colors.dark} />
          <ListItem.Content>
            <ListItem.Title>Sign Out</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

      </View>
    </View>
  )
}