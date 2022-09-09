import React from 'react';
import {ActivityIndicator, Button, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import AccountScreen from './screens/AccountScreen';
import TrackCreateScreen from './screens/TrackCreateScreen';
import TrackDetailScreen from './screens/TrackDetailScreen';
import TrackListScreen from './screens/TrackListScreen';
import NewScreen from './screens/NewScreen';

const Stack = createNativeStackNavigator();

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="btn1"
        onPress={() => {
          navigation.navigate('Home0');
        }}
      />
      <Button
        title="btn2"
        onPress={() => {
          navigation.navigate('Home1');
        }}
      />
      <Button
        title="btn3"
        onPress={() => {
          navigation.navigate('Home2');
        }}
      />
      <Button
        title="btn4"
        onPress={() => {
          navigation.navigate('Home3');
        }}
      />
      <Button
        title="btn5"
        onPress={() => {
          navigation.navigate('Home4');
        }}
      />
      <Button
        title="btn6"
        onPress={() => {
          navigation.navigate('Home5');
        }}
      />
      <Button
        title="btn7"
        onPress={() => {
          navigation.navigate('Home6');
        }}
      />
    </View>
  );
};

const App = () => (
  <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Home0" component={SigninScreen} />
        <Stack.Screen name="Home1" component={SignupScreen} />
        <Stack.Screen name="Home2" component={AccountScreen} />
        <Stack.Screen name="Home3" component={TrackCreateScreen} />
        <Stack.Screen name="Home4" component={TrackDetailScreen} />
        <Stack.Screen name="Home5" component={TrackListScreen} />
        <Stack.Screen name="Home6" component={NewScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    {/* <TrackListScreen /> */}
    {/* <TrackDetailScreen /> */}
    {/* <TrackCreateScreen /> */}
    {/* <SigninScreen /> */}
    {/* <SignupScreen /> */}
  </>
  // <View style={[styles.container, styles.horizontal]}>
  //   <ActivityIndicator />
  //   <ActivityIndicator size="large" />
  //   <ActivityIndicator size="small" color="#0000ff" />
  //   <ActivityIndicator size="large" color="#00ff00" hidesWhenStopped />
  // </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default App;
