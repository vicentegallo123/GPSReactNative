import { DefaultTheme } from 'react-native-paper'

// Define un tema personalizado que extiende el tema por defecto de react-native-paper
export const theme = {
  // Utiliza la función de propagación para heredar todas las propiedades del tema por defecto
  ...DefaultTheme,
  // Sobrescribe los colores del tema por defecto con los colores personalizados
  colors: {
    ...DefaultTheme.colors,
    // Color de texto principal
    text: '#000000',
    // Color primario utilizado para resaltar elementos importantes
    primary: '#560CCE',
    // Color secundario utilizado para texto secundario y otros elementos menos importantes
    secondary: '#414757',
    // Color utilizado para indicar errores
    error: '#f13a59',
  },
}
