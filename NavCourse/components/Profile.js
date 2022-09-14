import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        title="Edit profile"
        onPress={() => {
          navigation.navigate('Edit');
        }}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
