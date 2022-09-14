import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileEdit from './ProfileEdit';
import Profile from './Profile';
const Stack = createNativeStackNavigator();

const ProfileTransfer = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Edit" component={ProfileEdit} />
    </Stack.Navigator>
  );
};

export default ProfileTransfer;
