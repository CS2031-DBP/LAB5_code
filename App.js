import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import Home from './src/screens/Inicio';
import Description from './src/screens/PaginaWed';
import WebPage from './src/screens/Pagina';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#000', // Fondo oscuro
            },
            headerTintColor: '#ed1d24', // Rojo Marvel
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Marvel Heroes',
              headerTitle: () => (
                <Image
                  style={styles.headerLogo}
                />
              ),
            }}
          />
          <Stack.Screen
            name="Description"
            component={Description}
            options={{
              title: 'Detalles de heroes',
            }}
          />
          <Stack.Screen
            name="WebPage"
            component={WebPage}
            options={{
              title: 'Pagina informacion',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  headerLogo: {
    width: 120,
    height: 30,
  },
});
