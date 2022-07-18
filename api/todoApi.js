/* eslint-disable prettier/prettier */
import React from 'react';
// eslint-disable-next-line prettier/prettier
import axios from 'axios';
import { useQuery } from 'react-query';
import {Alert} from 'react-native';




 export const usecallApi = (setTodos) => {
  };

 export  const addApi = (data,setTodos,setTextInput,todos) => {
    axios
      .post('https://62bebee3be8ba3a10d5a8e4b.mockapi.io/todo', data)
      .then(function (response) {
        // handle success
        console.log('ADDCheck:' + response.data);
        setTodos([...todos, response.data]);
        setTextInput('');
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  export const deleteApi = (data,setTodos,todos,) => {
    axios
      .delete(`https://62bebee3be8ba3a10d5a8e4b.mockapi.io/todo/${data}`)
      .then(function (response) {
        // handle success
        console.log('DelCheck:' + response.data);
        const newTodosItem = todos.filter(item => item.id !== data);
        setTodos(newTodosItem);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  export const addTodo = (textInput) => {
    if (textInput === '') {
      Alert.alert('Error', 'Please input todo');
    } else {
      const newTodo = {
        id: Math.random(),
        task: textInput,
        completed: false,
      };
      //setTodos([...todos, newTodo]);
      //setTextInput('');
      addApi(newTodo);
    }
  };

 export const markTodoComplete = (todoId,todos,setTodos) => {
    const newTodosItem = todos.map(item => {
      if (item.id === todoId) {
        return {...item, completed: true};
      }
      return item;
    });
    setTodos(newTodosItem);
  };
  
  const api = axios.create({
    baseURL: 'https://62bebee3be8ba3a10d5a8e4b.mockapi.io',
  });

 export const getTodoList = () => api.get('/todo').then(res => res.data);