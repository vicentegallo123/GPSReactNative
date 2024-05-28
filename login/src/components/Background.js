import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { theme } from '../core/theme'

// Este componente Background recibe children como prop, lo que significa que puede contener otros elementos anidados
export default function Background({ children }) {
  return (
    // El componente ImageBackground muestra una imagen de fondo que puede repetirse para cubrir el área disponible
    // La fuente de la imagen se carga desde '../assets/background_dot.png'
    // resizeMode se establece en 'repeat' para que la imagen se repita en caso de que el contenido supere su tamaño
    // Los estilos para este componente se definen en el objeto styles.background
    <ImageBackground
      source={require('../assets/background_dot.png')}
      resizeMode="repeat"
      style={styles.background}
    >
      {/* El componente KeyboardAvoidingView se usa para evitar que el teclado cubra los elementos */}
      {/* Los estilos para este componente se definen en el objeto styles.container */}
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {/* Renderiza los hijos del componente Background */}
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

// Define estilos usando StyleSheet.create
const styles = StyleSheet.create({
  background: {
    // Flex 1 para que el fondo ocupe todo el espacio disponible
    flex: 1,
    // Ancho del fondo al 100% del contenedor
    width: '100%',
    // Establece el color de fondo con el color de fondo del tema definido en '../core/theme'
    backgroundColor: theme.colors.background,
  },
  container: {
    // Flex 1 para que el contenedor ocupe todo el espacio disponible
    flex: 1,
    // Añade un relleno de 20 unidades de píxeles alrededor del contenedor
    padding: 20,
    // Ancho del contenedor al 100% del contenedor principal
    width: '100%',
    // Establece el ancho máximo del contenedor a 340 unidades de píxeles
    maxWidth: 340,
    // Centra el contenedor horizontalmente
    alignSelf: 'center',
    // Centra los elementos secundarios verticalmente dentro del contenedor
    alignItems: 'center',
    // Centra los elementos secundarios horizontalmente dentro del contenedor
    justifyContent: 'center',
  },
})
