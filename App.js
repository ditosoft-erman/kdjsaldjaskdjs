import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/login.js';
import Register from './screens/register.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
<Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
  <Stack.Screen name="Login" component={Login}  />
  <Stack.Screen name="Register" component={Register}/>
</Stack.Navigator>
   </NavigationContainer>
  );
}


