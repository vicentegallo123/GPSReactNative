import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

// Este componente Logo muestra una imagen de logo
export default function Logo() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.image} />
    </View>
  );
}

// Define estilos usando StyleSheet.create
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    // Establece el ancho de la imagen en 110 unidades de píxeles
    width: 110,
    // Establece la altura de la imagen en 110 unidades de píxeles
    height: 110,
    // Margen inferior de 8 unidades de píxeles
    marginBottom: 8,
  },
});
