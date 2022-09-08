import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import ImageScreen from './screens/ImageScreen';
import CounterScreen from './screens/CounterScreen';
import ColorScreen from './screens/ColorScreen';
import FlexboxScreen from './screens/FlexboxScreen';
import PositionScreen from './screens/PositionScreen';
import BoxScreen from './screens/BoxScreen';

const App = () => {
  return <PositionScreen />;
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 45,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//     fontSize: 20,
//   },
// });

export default App;

// <SafeAreaView style={styles.sectionContainer}>
//   <View>
//     <Text style={styles.sectionTitle}>Hello world</Text>
//     <Text style={styles.highlight}>React native</Text>
//   </View>
// </SafeAreaView>
