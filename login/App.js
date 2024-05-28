import React from 'react';
import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from './src/core/theme';
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  Maps
} from './src/screens';


// Crea un navegador stack
const Stack = createStackNavigator();

// Define el componente funcional principal de la aplicación, App
export default function App() {
  return (
    // Proporciona el tema de la aplicación a los componentes de React Native Paper
    <PaperProvider theme={theme}>
      {/* Contenedor de navegación que envuelve toda la aplicación */}
      <NavigationContainer>
        {/* Navegador stack que define las diferentes pantallas de la aplicación */}
        <Stack.Navigator
          initialRouteName="StartScreen" // Ruta inicial del navegador
          screenOptions={{
            headerShown: false, // Oculta el encabezado en todas las pantallas
          }}
        >
          {/* Definición de las pantallas y sus componentes */}
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
          <Stack.Screen name="Maps" component={Maps} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
