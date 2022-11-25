import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Texto from './Texto';

export default function Cadastro({ texto, onPress, style }) {
  return <TouchableOpacity style={[estilos.botaoCadastro, style]} onPress={onPress}>
  <Texto style={estilos.textoBotaoCadastro}>{ texto }</Texto>
</TouchableOpacity>
}

const estilos = StyleSheet.create({
  botaoCadastro: {
    backgroundColor: "#d4bb94",
    paddingVertical: 8,
    paddingHorizontal: 99,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotaoCadastro: {
    textAlign: "center",
    color: "#fff",
    fontSize: 14,
    lineHeight: 26,
    fontWeight: "bold",
  },
});