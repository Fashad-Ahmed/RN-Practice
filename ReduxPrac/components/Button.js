import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Button = props => {
  return (
    <View>
      <TouchableOpacity
        onPress={props.onPress}
        style={{
          backgroundColor: 'grey',
        }}>
        <Text>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({});
