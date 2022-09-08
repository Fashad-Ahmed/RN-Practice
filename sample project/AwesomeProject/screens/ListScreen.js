import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

const ListScreen = () => {
  const arrayOfObjects = [
    {
      name: 'Friend1',
      age: '20',
      name: 'Friend2',
      age: '20',
      name: 'Friend13',
      age: '20',
      name: 'Friend14',
      age: '20',
      name: 'Friend12',
      age: '20',
      name: 'Friend15',
      age: '20',
      name: 'Friend16',
      age: '20',
      name: 'Friend19',
      age: '20',
      name: 'Friend13',
      age: '20',
      name: 'Friend122',
      age: '20',
      name: 'Friend18',
      age: '20',
      name: 'Friend17',
      age: '20',
      name: 'Friend10',
      age: '20',
    },
  ];

  return (
    <View>
      <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.name}
        // showsVerticalScrollIndicator={true}
        data={arrayOfObjects}
        renderItem={({item}) => {
          return <Text>Name - {item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    marginVertical: 2,
  },
});

export default ListScreen;
