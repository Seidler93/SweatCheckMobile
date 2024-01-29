import { StyleSheet } from 'react-native';

const HeaderStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: 'blue',
    paddingTop: 50,
    paddingRight: 10,
    paddingBottom: 50,
    paddingLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});

export default HeaderStyles;
