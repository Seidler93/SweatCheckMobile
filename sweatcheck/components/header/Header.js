import { View, Text } from 'react-native';
import HeaderStyles from './HeaderStyles'

const Header = () => {
  return (
    <View style={HeaderStyles.container}>
      <Text style={HeaderStyles.text}>This is the Header</Text>
    </View>
  );
};

export default Header;
