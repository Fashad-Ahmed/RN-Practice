import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ProfileEdit = () => {
  return (
    <View>
      <Text>ProfileEdit</Text>
      <View>
        <TouchableOpacity
          style={{
            marginVertical: 40,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            borderWidth: 3,
          }}
          onPress={() => {
            console.log('hsdhh');
            // navigation.navigate('ProfileEdit');
          }}>
          <Text>ProfileEdit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileEdit;

const styles = StyleSheet.create({});
