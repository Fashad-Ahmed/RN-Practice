import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addStep, decrement, increment} from '../redux/features';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

const Counter = () => {
  const dispatch = useDispatch();
  const {count} = useSelector(state => state.counter);

  const [step, setStep] = useState(1);
  const incrementVal = () => {
    dispatch(increment());
  };
  const decrementVal = () => {
    dispatch(decrement());
  };

  const addStepToVal = () => {
    dispatch(addStep(step));
  };

  return (
    <View>
      <Text style={styles.textStyle}>{count}</Text>
      <TextInput
        placeholder="add step"
        onChangeText={val => setStep(parseInt(val, 10))}
        keyboardAppearance={'dark'}
      />
      <Button title="Increment" onPress={incrementVal} />
      <Button title="Decrement" onPress={decrementVal} />
      <Button title="Add Step" onPress={addStepToVal} />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});
