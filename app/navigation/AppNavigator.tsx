import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import log_in from '../screens/log_in_page';
import sign_up from '../screens/sign_up_page';
import dashboard from '../screens/dashboard';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Log In" component={log_in} />
      <Stack.Screen name="Sign Up" component={sign_up} />
      <Stack.Screen name="Dashboard" component={dashboard} />
    </Stack.Navigator>
  );
};
