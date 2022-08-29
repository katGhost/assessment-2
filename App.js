import React, { Component } from 'react';;
import HomeScreen from './src/screens/Home/HomeScreen';
import LoginScreen from './src/LoginScreen';
import RegisterScreen from './src/RegisterScreen';
import ItemDetails from './src/components/Dashboard/ItemDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen' >
        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false}} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false}} />
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name='ItemDetails' component={ItemDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}