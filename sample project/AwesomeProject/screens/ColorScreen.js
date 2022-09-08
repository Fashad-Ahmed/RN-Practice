import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const ColorScreen = () => {
  const [color, setColor] = useState([]);
  return (
    <View>
      <Button
        title="Add Color"
        onPress={() => {
          console.log(color);
          setColor([...color, randomRGB()]);
        }}
      />

      <FlatList
        keyExtractor={item => item}
        data={color}
        renderItem={({item}) => {
          return (
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: item,
              }}
            />
          );
        }}
      />
    </View>
  );
};

const randomRGB = () => {
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const red = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
