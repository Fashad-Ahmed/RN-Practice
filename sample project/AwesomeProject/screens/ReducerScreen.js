import {StyleSheet, Text, View} from 'react-native';
import React, {useReducer} from 'react';

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case 'red':
      return {...state, red: state.red + action.amount};
    case 'green':
      return {...state, green: state.green + action.amount};
    case 'blue':
      return {...state, blue: state.blue + action.amount};
    default:
      return state;
  }
};
const ReducerScreen = () => {
  const [state, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });
  return (
    <View>
      <Text>ReducerScreen</Text>
    </View>
  );
};

export default ReducerScreen;

const styles = StyleSheet.create({});
