import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Link, NavigationContainer} from '@react-navigation/native';

import Profile from '../components/Profile';
import Settings from '../components/Settings';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileTransfer from './ProfileTransfer';

const Tab = createBottomTabNavigator();

// const Info = () => {
//   return (
//     <View>
//       <Text>About</Text>
//       <View
//         style={{
//           // marginVertical: 40,
//           alignItems: 'center',
//           justifyContent: 'center',
//           // padding: 10,
//         }}>
//         <Button title="Go Back" onPress={() => navigation.goBack()} />
//       </View>
//       <View
//         style={{
//           marginVertical: 40,
//           alignItems: 'center',
//           justifyContent: 'center',
//           padding: 10,
//         }}>
//         <Button title="Go Backsdd" onPress={() => navigation.openDrawer()} />
//       </View>

//       <View
//         style={{
//           marginVertical: 40,
//           alignItems: 'center',
//           justifyContent: 'center',
//           padding: 10,
//         }}>
//         <Button
//           title="Go Baasasacksdd"
//           onPress={() => navigation.closeDrawer()}
//         />
//       </View>

//       <View
//         style={{
//           marginVertical: 40,
//           alignItems: 'center',
//           justifyContent: 'center',
//           padding: 10,
//         }}>
//         <Button
//           title="Go Bacqqqksdd"
//           onPress={() => navigation.toggleDrawer()}
//         />
//       </View>
//     </View>
//   );
// };
const About = () => {
  // console.log('route', route);
  // console.log('navigation', navigation);

  // const navigation = useNavigation();
  // const route = useRoute();

  return (
    <Tab.Navigator>
      {/* <Info /> */}
      <Tab.Screen name="ProfileStack" component={ProfileTransfer} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

// const ProfilePart = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
//     </Stack.Navigator>
//   );
// };

export default About;
const styles = StyleSheet.create({});
