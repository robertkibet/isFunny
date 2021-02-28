import { StyleSheet, Dimensions } from 'react-native';
import { colors } from './global/colors-enums';
const { width, height } = Dimensions.get('window');

export const containerStyles = StyleSheet.create({
  landing: {
    height: (height - 40),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 200
  },
  index: {
    // padding: 20,
    // flex: 1,
    backgroundColor: colors.body.background.dark,
    position: 'relative',
    fontFamily: 'Josefin Sans',
    width: width
  },
  wrapper: {
    borderTopRightRadius: 300,
    padding: 20,
    backgroundColor: colors.body.background.light,
  },
  buttonBottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  shareIcons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '50%'
  },
  header: {
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    position: 'absolute',
    paddingLeft: 20,
    paddingTop: 20
  }
})