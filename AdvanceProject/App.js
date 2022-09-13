import React from 'react';
import {ActivityIndicator, Button, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import 'react-native-gesture-handler';
// screens
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import AccountScreen from './screens/AccountScreen';
import TrackCreateScreen from './screens/TrackCreateScreen';
import TrackDetailScreen from './screens/TrackDetailScreen';
import TrackListScreen from './screens/TrackListScreen';
import NewScreen from './screens/NewScreen';
import Home from './screens/home';
import Welcome from './screens/welcome';
import AddTask from './screens/addTask';

const Stack = createNativeStackNavigator();
// const Stack = createBottomTabNavigator();
// const Stack = createDrawerNavigator();

const OldHome = ({navigation}) => {
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
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddTask" component={AddTask} />
        {/* <Stack.Screen name="OldHome" component={OldHome} />
        <Stack.Screen name="Home0" component={SigninScreen} />
        <Stack.Screen name="Home1" component={SignupScreen} />
        <Stack.Screen name="Home2" component={AccountScreen} />
        <Stack.Screen name="Home3" component={TrackCreateScreen} />
        <Stack.Screen name="Home4" component={TrackDetailScreen} />
        <Stack.Screen name="Home5" component={TrackListScreen} />
        <Stack.Screen name="Home6" component={NewScreen} /> */}
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
