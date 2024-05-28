import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

// Define el componente funcional Dashboard que recibe la navegación como prop
export default function Dashboard({ navigation }) {
  return (
    // Utiliza el componente Background como el fondo de la pantalla
    <Background>
      {/* Muestra el componente Logo */}
      <Logo />
      {/* Muestra el componente Header con el texto "Vamos a Comenzar" */}
      <Header>Vamos a Comenzar</Header>
      {/* Muestra el componente Paragraph con el texto "Entrar" */}
      <Paragraph>
        Entrar
      </Paragraph>
      {/* Muestra el componente Button con el texto "Registrate" */}
      {/* Al presionar este botón, se resetea la navegación a la pantalla 'StartScreen' */}
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Registrate
      </Button>
    </Background>
  )
}
