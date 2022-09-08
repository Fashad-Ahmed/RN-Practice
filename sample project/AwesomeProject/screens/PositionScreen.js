import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PositionScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.textOneStyle}></View>
      <View style={styles.textTwoStyle}></View>
      <View style={styles.textThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  //   viewStyle: {
  //     borderWidth: 0,
  //     borderColor: 'black',
  //     marginVertical: 10,
  //     marginHorizontal: 10,
  //     flexDirection: 'row',
  //     // justifyContent: 'space-between',
  //     // height: 500,
  //   },
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    marginVertical: 10,
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textOneStyle: {
    // borderWidth: 0,
    backgroundColor: 'green',
    height: 50,
    width: 50,
  },
  textTwoStyle: {
    // borderWidth: 4,
    backgroundColor: 'purple',
    height: 50,
    width: 50,
    marginTop: 50,
  },
  textThreeStyle: {
    // borderWidth: 4,
    backgroundColor: 'yellow',
    height: 50,
    width: 50,
  },
});

export default PositionScreen;
