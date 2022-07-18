/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../App';
const Header = props => {

    const clearAllTodos = () => {
        Alert.alert('Confirm', 'Clear todos?', [
          {
            text: 'Yes',
            onPress: () => props.setTodos([]),
          },
          {
            text: 'No',
          },
        ]);
      };
  return (
    <View style={styles.header}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          color: COLORS.primary,
        }}>
        TODO APP
      </Text>
      <Icon name="delete" size={25} color="red" onPress={clearAllTodos} />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default Header;
