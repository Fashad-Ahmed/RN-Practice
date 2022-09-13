import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';
import * as ActionTypes from '../store/actionTypes';

const Welcome = props => {
  const [name, setName] = useState('');
  const handleInput = () => {
    props.addUser(name);
    props.navigation.navigate('Home');
  };
  return (
    <View>
      <Text>gfdd{props.user.username}</Text>
      <Input
        onChangeText={text => setName(text)}
        placeholder="like what you see"
      />
      <Button text="enter" onPress={() => handleInput()} />
    </View>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  addUser: username =>
    dispatch({
      type: ActionTypes.ADD_USER,
      payload: {
        username,
      },
    }),
});

const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectComponent(Welcome);

const styles = StyleSheet.create({});
