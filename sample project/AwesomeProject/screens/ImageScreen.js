import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="first" imageSource={require('../assets/beach.jpg')} />
      <ImageDetail imageSource={require('../assets/forest.jpg')} />
      <ImageDetail imageSource={require('../assets/mountain.jpg')} />
    </View>
  );
};
const styles = StyleSheet.create({});

export default ImageScreen;
