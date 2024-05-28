import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

// Este componente Paragraph es un componente de texto que renderiza un párrafo con un estilo específico
export default function Paragraph(props) {
  return <Text style={styles.text} {...props} />
}

// Define estilos usando StyleSheet.create
const styles = StyleSheet.create({
  text: {
    // Tamaño de la fuente de 15 unidades de píxeles
    fontSize: 15,
    // Altura de línea de 21 unidades de píxeles
    lineHeight: 21,
    // Alineación del texto centrada
    textAlign: 'center',
    // Margen inferior de 12 unidades de píxeles
    marginBottom: 12,
  },
})
