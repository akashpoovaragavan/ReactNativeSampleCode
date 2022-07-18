/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import InputText from './inputText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { addTodo } from '../api/todoApi';
import { COLORS } from '../App';
const Footer = ({textInput,setTextInput}) => {
  return (
    <View style={styles.footer}>
      <InputText textInput={textInput} setTextInput={setTextInput}/>
      <TouchableOpacity onPress={addTodo}>
        <View style={styles.iconContainer}>
          <Icon name="add" color="white" size={30} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.primary,
    elevation: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
  },
});
export default Footer;
