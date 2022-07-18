/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import axios from 'axios';
import ListItem from './components/todoList';
import Header from './components/header';
import Footer from './components/footer';
import { useQuery , QueryClient , QueryClientProvider} from 'react-query';
import * as api from './api/todoApi';

export const COLORS = {primary: '#1f145c', white: '#fff'};

const queryClient = new QueryClient();

const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [textInput, setTextInput] = React.useState('');

//   const {data, isLoading} = useQuery("todoList",()=>{
//     return axios
//      .get('https://62bebee3be8ba3a10d5a8e4b.mockapi.io/todo')
//      .then(function (response) {
//        // handle success
//        setTodos(response.data);
//        console.log('Check:' + response.data);
//      })
//      .catch(function (error) {
//        // handle error
//        console.log(error);
//      })
//      .then(function () {
//        // always executed
//      });
//  });
 const { data } = useQuery("todoList",api.getTodoList);

  return (
    <QueryClientProvider client={queryClient}>
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Header setTodos={setTodos}/>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 20, paddingBottom: 100}}
        data={todos}
        renderItem={({item}) => <ListItem todo={item} />}
      />
      <Footer textInput={textInput} setTextInput={setTextInput}/>
    </SafeAreaView>
    </QueryClientProvider>
  );
};
export default App;
