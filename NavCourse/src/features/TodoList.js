import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';

const TodoList = () => {
  const todos = useSelector(state => state.todos);

  console.log(todos);

  const renderItem = ({item}) => {
    return <Text>{item.text}</Text>;
  };
  return (
    <View>
      <Text>TodoList</Text>
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({});
