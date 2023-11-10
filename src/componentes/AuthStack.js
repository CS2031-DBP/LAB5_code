import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Description from './src/screens/Description';
import WebPage from './src/screens/WebPage';

const Stack = createStackNavigator();

const AuthStack = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        accessible={isAuthenticated}
      />
      <Stack.Screen
        name="Description"
        component={Description}
        options={{
          title: 'Description',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        accessible={isAuthenticated}
      />
      <Stack.Screen
        name="WebPage"
        component={WebPage}
        options={{
          title: 'WebPage',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        accessible={isAuthenticated}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;