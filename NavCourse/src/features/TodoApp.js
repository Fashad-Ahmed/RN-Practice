import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const TodoApp = () => {
  return (
    <View>
      <AddTodo />
      <TodoList />
    </View>
  );
};

export default TodoApp;

const styles = StyleSheet.create({});
