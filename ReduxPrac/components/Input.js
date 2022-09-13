import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Input = props => {
  return (
    <View>
      <TextInput placeholder={props.placeholder} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
