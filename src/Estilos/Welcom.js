import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Animated, Easing } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const Welcom = () => {
  const rotateValue = new Animated.Value(0);

  useEffect(() => {
    // Inicia una animación de rotación mientras se muestra la pantalla de bienvenida
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('./path-to-marveSl-logo.png')}
        style={[styles.logo, { transform: [{ rotate: rotateValue.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] }) }] }]}
      />
      <Text style={styles.welcomeText}>Welcome to Marvel App!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#20232A', // Fondo oscuro
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 20,
    color: '#61dafb', // Color azul brillante
  },
});

export default Welcom;
