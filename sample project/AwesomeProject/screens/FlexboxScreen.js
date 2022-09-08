import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const FlexboxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child1</Text>
      <Text style={styles.textTwoStyle}>Child2</Text>
      <Text style={styles.textThreeStyle}>Child3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 5,
    borderColor: 'black',
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 500,
  },
  textOneStyle: {
    borderWidth: 4,
    borderColor: 'red',
    flex: 1,
  },
  textTwoStyle: {
    borderWidth: 4,
    borderColor: 'red',
    flex: 1,
    alignSelf: 'center',
    ...StyleSheet.absoluteFillObject,
    // EQUIVALENT to
    // position: 'absolute',
    // left: 0,
    // top: 0,
    // right: 0,
    // bottom: 0,
  },
  textThreeStyle: {
    borderWidth: 4,
    borderColor: 'red',
    flex: 1,
  },
});

export default FlexboxScreen;
