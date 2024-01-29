import { View, Text, Button } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, paddingTop: 100 }}>
      <Text>Welcome to the Home Page!</Text>
      <Button
        title="Workout"
        onPress={() => navigation.navigate('NewWorkout')}
      />
    </View>
  );
};

export default HomePage;
