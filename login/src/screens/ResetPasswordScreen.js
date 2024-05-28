import React, { useState } from 'react';
import { Alert } from 'react-native';
import Background from '../components/Background';
import BackButton from '../components/BackButton';
import Logo from '../components/Logo';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { emailValidator } from '../helpers/emailValidator';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

// Define el componente funcional ResetPasswordScreen que recibe la navegación como prop
export default function ResetPasswordScreen({ navigation }) {
  // Define estado para el correo electrónico, incluyendo su error
  const [email, setEmail] = useState({ value: '', error: '' });

  // Función llamada cuando se presiona el botón de enviar instrucciones de restablecimiento de contraseña
  const sendResetPasswordEmail = () => {
    // Valida el correo electrónico
    const emailError = emailValidator(email.value);
    // Si hay un error, lo establece en el estado y retorna
    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }

    // Obtener la instancia de autenticación de Firebase
    const auth = getAuth();

    // Enviar el correo electrónico de restablecimiento de contraseña usando Firebase Authentication
    sendPasswordResetEmail(auth, email.value)
      .then(() => {
        Alert.alert('Éxito', 'Se ha enviado un correo electrónico con las instrucciones para restablecer tu contraseña.');
        // Navegar a la pantalla de inicio de sesión
        navigation.navigate('LoginScreen');
      })
      .catch((error) => {
        Alert.alert('Error', error.message);
      });
  };

  return (
    // Fondo de la pantalla para restablecer la contraseña
    <Background>
      {/* Botón de retroceso */}
      <BackButton goBack={navigation.goBack} />
      {/* Logo de la aplicación */}
      <Logo />
      {/* Encabezado */}
      <Header>Restablecer Contraseña</Header>
      {/* Campo de entrada de correo electrónico */}
      <TextInput
        label="Correo"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        // Descripción que indica que se recibirá un correo electrónico con instrucciones para restablecer la contraseña
        description="Recibirás un correo electrónico con un enlace para restablecer la contraseña."
      />
      {/* Botón de enviar instrucciones de restablecimiento de contraseña */}
      <Button
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={{ marginTop: 16 }}
      >
        Enviar Instrucciones
      </Button>
    </Background>
  );
}
