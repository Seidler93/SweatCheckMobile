import { View, Text } from 'react-native';
import FooterStyles from './FooterStyles'

const Footer = () => {
  return (
    <View style={FooterStyles.container}>
      <Text style={FooterStyles.text}>This is the Footer</Text>
    </View>
  );
};

export default Footer;
