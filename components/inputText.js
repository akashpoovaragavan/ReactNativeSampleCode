/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import { COLORS } from '../App';
const InputText = ({textInput,setTextInput}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={textInput}
        placeholder="Add Todo"
        onChangeText={text => setTextInput(text)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    height: 50,
    paddingHorizontal: 20,
    elevation: 40,
    backgroundColor: COLORS.white,
    flex: 1,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
  },
});
export default InputText;