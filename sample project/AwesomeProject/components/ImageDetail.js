import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import imageOne from '../assets/beach.jpg';
import imageTwo from '../assets/forest.jpg';
import imageThree from '../assets/mountain.jpg';

const ImageDetail = ({title, imageSource}) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>ImageDetail {title ? title : 'nothing'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
