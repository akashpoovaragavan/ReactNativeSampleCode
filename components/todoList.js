/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {markTodoComplete,deleteTodo} from '../api/todoApi';
import { COLORS } from '../App';
const ListItem = ({todo}) => {
  return (
    <View style={styles.listItem}>
      <View style={{flex: 1}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            color: COLORS.primary,
            textDecorationLine: todo?.completed ? 'line-through' : 'none',
          }}>
          {todo?.task}
        </Text>
      </View>
      {!todo?.completed && (
        <TouchableOpacity onPress={() => markTodoComplete(todo.id)}>
          <View style={[styles.actionIcon, {backgroundColor: 'green'}]}>
            <Icon name="done" size={20} color="white" />
          </View>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
        <View style={styles.actionIcon}>
          <Icon name="delete" size={20} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  listItem: {
    padding: 20,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    elevation: 12,
    borderRadius: 7,
    marginVertical: 10,
  },
});
export default ListItem;
