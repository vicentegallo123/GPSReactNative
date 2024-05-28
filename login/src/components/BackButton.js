// Importa las bibliotecas necesarias de React y React Native
import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
// Importa la función getStatusBarHeight de la biblioteca react-native-status-bar-height
import { getStatusBarHeight } from 'react-native-status-bar-height'

// Define un componente de función llamado BackButton que toma una función goBack como argumento
export default function BackButton({ goBack }) {
  return (
    // Un componente TouchableOpacity es un componente de botón que muestra un efecto de opacidad cuando se presiona
    // onPress se le pasa la función goBack, lo que significa que cuando se presiona el botón, se ejecutará goBack
    // style se define con los estilos definidos en la constante styles.container
    <TouchableOpacity onPress={goBack} style={styles.container}>
      {/* Un componente de imagen que muestra una flecha hacia atrás */}
      <Image
        style={styles.image}
        // La fuente de la imagen se carga desde el archivo '../assets/arrow_back.png'
        source={require('../assets/arrow_back.png')}
      />
    </TouchableOpacity>
  )
}

// Define estilos usando StyleSheet.create
const styles = StyleSheet.create({
  container: {
    // Posiciona el contenedor de manera absoluta en la parte superior izquierda de la pantalla
    position: 'absolute',
    // El valor de 'top' se establece sumando 10 a la altura de la barra de estado del dispositivo,
    // lo que asegura que el botón esté ligeramente debajo de la barra de estado.
    top: 10 + getStatusBarHeight(),
    // Establece el margen izquierdo en 4 unidades de píxeles
    left: 4,
  },
  image: {
    // Establece el ancho de la imagen en 24 unidades de píxeles
    width: 24,
    // Establece la altura de la imagen en 24 unidades de píxeles
    height: 24,
  },
})
