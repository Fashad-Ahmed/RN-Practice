import React from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';
import ImageScreen from './ImageScreen';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Hello</Text>
      <TouchableOpacity onPress={() => console.log('TO')}>
        <Text style={styles.textStyle}>Hello</Text>
        <Text style={styles.textStyle}>Hello</Text>
        <Text style={styles.textStyle}>Hello</Text>
        <Text style={styles.textStyle}>Hello</Text>
      </TouchableOpacity>
      <Button title="BTN0" onPress={() => console.log('BTN')} />

      <Button title="BTN000" onPress={() => console.log('BTN')} />
      <ImageScreen />
    </View>
  );
};

// recieving props of navigaton calling props here and using props.navigaton.navigate

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default HomeScreen;
