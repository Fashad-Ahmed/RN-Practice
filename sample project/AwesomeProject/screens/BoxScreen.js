import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <TextInput style={styles.textStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  textStyle: {
    borderWidth: 1,
    borderColor: 'red',
  },
});

export default BoxScreen;
