import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput as Input } from 'react-native-paper'
import { theme } from '../core/theme'

// Este componente TextInput es un envoltorio alrededor del componente TextInput de react-native-paper
export default function TextInput({ errorText, description, ...props }) {
  return (
    // Contenedor que envuelve el componente TextInput y los mensajes de descripción y error
    <View style={styles.container}>
      {/* Componente Input renderiza un campo de entrada de texto */}
      <Input
        style={styles.input}
        // Color de selección del texto establecido en el color primario del tema
        selectionColor={theme.colors.primary}
        // Color de la línea inferior transparente
        underlineColor="transparent"
        // Modo del TextInput establecido en "outlined"
        mode="outlined"
        // Se pasan todas las props proporcionadas al componente Input
        {...props}
      />
      {/* Si hay una descripción y no hay un mensaje de error, se muestra la descripción */}
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {/* Si hay un mensaje de error, se muestra el mensaje de error */}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  )
}

// Define estilos usando StyleSheet.create
const styles = StyleSheet.create({
  container: {
    // Ancho del contenedor al 100% del ancho disponible
    width: '100%',
    // Margen vertical de 12 unidades de píxeles
    marginVertical: 12,
  },
  input: {
    // Color de fondo del campo de entrada establecido en el color de superficie del tema
    backgroundColor: theme.colors.surface,
  },
  description: {
    // Tamaño de la fuente de 13 unidades de píxeles
    fontSize: 13,
    // Color del texto establecido en el color secundario del tema
    color: theme.colors.secondary,
    // Relleno superior de 8 unidades de píxeles
    paddingTop: 8,
  },
  error: {
    // Tamaño de la fuente de 13 unidades de píxeles
    fontSize: 13,
    // Color del texto establecido en el color de error del tema
    color: theme.colors.error,
    // Relleno superior de 8 unidades de píxeles
    paddingTop: 8,
  },
})
