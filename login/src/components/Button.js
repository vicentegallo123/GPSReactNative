import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { theme } from '../core/theme';

// Este componente Button acepta props como modo, estilo y otras props adicionales
export default function Button({ mode, style, ...props }) {
  return (
    // El componente PaperButton se importa de react-native-paper y se utiliza para renderizar un botón
    <PaperButton
      // Los estilos para este botón se definen en el objeto styles.button
      style={[
        styles.button,
        // Si el modo es 'outlined', el color de fondo se establece en el color de la superficie del tema
        mode === 'outlined' && { backgroundColor: theme.colors.surface },
        style,
      ]}
      // Los estilos para el texto del botón se definen en el objeto styles.text
      labelStyle={styles.text}
      // El modo del botón se establece según el modo proporcionado
      mode={mode}
      // Se pasan todas las demás props proporcionadas al componente PaperButton
      {...props}
    />
  );
}

// Define estilos usando StyleSheet.create
const styles = StyleSheet.create({
  button: {
    // El botón ocupa el 100% del ancho disponible
    width: '100%',
    // Margen vertical de 10 unidades de píxeles
    marginVertical: 5,
    // Relleno vertical de 2 unidades de píxeles
    paddingVertical: 2,
    // Centra horizontalmente el botón
    alignSelf: 'center',
  },
  text: {
    // Establece el peso de la fuente en negrita
    fontWeight: 'bold',
    // Tamaño de la fuente de 15 unidades de píxeles
    fontSize: 15,
    // Altura de línea de 26 unidades de píxeles
    lineHeight: 26,
  },
});
