import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Input from '../components/input';

const Welcome = () => {
  return (
    <View>
      <Text>Welcome</Text>
      <Input placeholder="hello" />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
