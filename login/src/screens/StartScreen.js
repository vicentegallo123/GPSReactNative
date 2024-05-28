import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential } from 'firebase/auth';
import { auth } from '../configuraciones/firebase';
import GoogleButton from '../components/buttonGoogle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

export default function StartScreen({ navigation }) {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    androidClientId: '120321981822-53cnj2enmi4ta4k6nh0culiv1gv0qf9m.apps.googleusercontent.com', // Reemplaza con tu verdadero ID de cliente
  });

  const getLocalUser = async () => {
    try {
      setLoading(true);
      const userJSON = await AsyncStorage.getItem('@user');
      const userData = userJSON ? JSON.parse(userJSON) : null;
      setUserInfo(userData);
    } catch (error) {
      console.error('Error getting local user:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential).catch((error) => {
        console.error('Error signing in with credential:', error);
      });
    }
  }, [response]);

  useEffect(() => {
    getLocalUser();
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await AsyncStorage.setItem('@user', JSON.stringify(user));
        setUserInfo(user);
        navigation.navigate('Maps');
      } else {
        console.log('User not authenticated');
      }
    });
    return () => unsub();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Background>
      <Logo />
      <Header>Inicia Sesión</Header>
      <Paragraph>Rastrea tu coche en tiempo Real</Paragraph>
      <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
        Entrar
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('RegisterScreen')}>
        Regístrate
      </Button>
      {/* <GoogleButton promptAsync={promptAsync} /> */}
    </Background>
  );
}
