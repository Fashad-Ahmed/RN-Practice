import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const CounterScreen = () => {
  const [value, setValue] = useState(0);
  const [text, setText] = useState('');
  const counter = 0;
  return (
    <View>
      <View></View>
      <Button
        title="increase"
        onPress={() => {
          setValue(counter + 1);
          console.log(value);
        }}
      />
      <Button
        title="decrease"
        onPress={() => {
          setValue(counter - 1);
          console.log(value);
        }}
      />
      <View></View>
      <View>
        <Text>Total Counter - {value} </Text>
        <View>
          <TextInput
            style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={newValue => {
              setText(newValue);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    margin: 15,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default CounterScreen;
