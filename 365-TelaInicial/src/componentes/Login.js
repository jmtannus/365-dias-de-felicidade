import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Stack, TextInput } from "@react-native-material/core";

export default function Login({}){
  return (
    <Stack spacing={2} style={{ margin:8 }}>
      <View style={{paddingTop: 18}}>
        <Text style={estilos.descricaoLoginSenha}>Digite seu login e senha aqui:</Text>
        <TextInput
          style={estilos.inputText}
          placeholder="login"
          variant="outlined"
          maxLength={40}
        />
        <TextInput
          style={estilos.inputText}
          placeholder="senha"
          variant="outlined"
          maxLength={40}
        />
      </View>
    </Stack>
  );
}
const estilos = StyleSheet.create({
  inputText: {
    height: 85,
    borderWidth: 2,
    textAlign: "center",
    borderColor: "#d4bb94",
    borderRadius: 3,
    padding: 10,
  },
  descricaoLoginSenha: {
    padding:8, 
    fontSize: 15,
    color: "#899e44",
  },
})