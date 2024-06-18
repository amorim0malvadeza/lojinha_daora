import React from 'react';
import { Text, StyleSheet, View, Image,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home';
import Details from './screens/brinks'

export default function App() {

  const stack = createStackNavigator();

  return (
    <NavigationContainer>

      <stack.Navigator>

        <stack.Screen name='Home' component={Home} ></stack.Screen>
        <stack.Screen name='brinks' component={Details}></stack.Screen>
      </stack.Navigator>

    </NavigationContainer>
  );
}
