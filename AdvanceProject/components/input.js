import react from 'react';
import {View, Text, TextInput, Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('screen');

const Input = props => {
  return (
    <View style={{marginVertical: 10, alignItems: 'center'}}>
      <TextInput style={styles.input} placeholder={props.placeholder} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderColor: '#555',
    borderWidth: 1,
    padding: 10,
    width: width / 1.1,
  },
});
