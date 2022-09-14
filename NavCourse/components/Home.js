import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Link, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import About from '../components/About';
import Contact from '../components/Contact';
import Service from '../components/Service';

import 'react-native-gesture-handler';
import Sidebar from './Sidebar';

// const Stack = createNativeStackNavigator();
const Stack = createDrawerNavigator();

const Index = () => {
  return (
    <View
      style={{
        marginVertical: 40,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
      }}>
      <Link
        to={{
          screen: 'About',
        }}
        style={{fontSize: 36}}>
        Go to About
      </Link>

      <Link
        to={{
          screen: 'Contact',
        }}
        style={{fontSize: 36}}>
        Go to Contact
      </Link>

      <Link
        to={{
          screen: 'Service',
        }}
        style={{fontSize: 36}}>
        Go to Service
      </Link>
    </View>
  );
};

const Home = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Home"
        // FOR STACK AND NATIVE STACK
        // screenOptions={{
        //   headerStyle: {
        //     backgroundColor: 'pink',
        //   },
        //   // title: 'Gust',
        //   headerTintColor: 'white',
        //   headerTitleStyle: {fontWeight: 'bold'},
        //   headerTitleAlign: 'center',
        //   headerShown: true,
        //   animationEnabled: true,
        //   headerRight: props => (
        //     <MaterialCommunityIcons name="account" size={34} color="white" />
        //   ),
        // }}

        // FOR DRAWER
        screenOptions={{
          // headerStyle: { backgroundColor:  }
          drawerActiveBackgroundColor: 'pink',
          // drawerActiveTintColor
          drawerStyle: {},
        }}
        drawerContent={props => <Sidebar {...props} />}
        defaultStatus="open">
        {/* <Stack.Group> */}
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerStyle: {
              backgroundColor: 'orange',
            },
          }}
        />
        <Stack.Screen name="Home" component={Index} />
        {/* </Stack.Group> */}

        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Service" component={Service} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Home;

const styles = StyleSheet.create({});
