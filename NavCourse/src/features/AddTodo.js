import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {addTodo} from './TodoSlice';
// reducer of add todo

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addTodo(text));
    setText('');
  };
  return (
    <View>
      <Text>AddTodo</Text>

      <TextInput
        placeholder="enter"
        value={text}
        onChangeText={item => setText(item)}
      />
      <Button title="add" onPress={handleSubmit} />
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({});
