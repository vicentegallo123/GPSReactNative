import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function ButtonGoogle({ promptAsync }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#4285F4',
        width: '100%',
        padding: 10,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => promptAsync()}
    >
      <AntDesign name="google" size={30} color="white" />
      <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 17, marginLeft: 10 }}>
        Entrar con Google
      </Text>
    </TouchableOpacity>
  );
}
