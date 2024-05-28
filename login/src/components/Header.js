import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'

// Este componente Header es un simple componente de texto que renderiza el texto con un estilo específico
export default function Header(props) {
  return <Text style={styles.header} {...props} />
}

// Define estilos usando StyleSheet.create
const styles = StyleSheet.create({
  header: {
    // Tamaño de la fuente de 21 unidades de píxeles
    fontSize: 21,
    // Color del texto establecido en el color primario del tema
    color: theme.colors.primary,
    // Peso de la fuente establecido en negrita
    fontWeight: 'bold',
    // Relleno vertical de 12 unidades de píxeles
    paddingVertical: 12,
  },
})
