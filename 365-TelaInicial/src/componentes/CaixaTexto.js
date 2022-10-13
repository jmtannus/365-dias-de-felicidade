import React from 'react';
import { View, TextInput, StyleSheet, Text, TouchableHighlight } from 'react-native';

import Texto from '../../src/componentes/Texto';

export default function CaixaDeTexto({}){
  
  return (
    <View style={{paddingTop: 25}}>
      <Text>Desejos pra vida</Text>
      <TextInput
        style={estilos.inputText}
        placeholder="FELICIDADE (pra cansar a bochecha de tanto sorrir)"
        onChangeText={(text) => this.setState({ text })}
        maxLength={40}/>
    </View>
  );
}
const estilos = StyleSheet.create({
  inputText: {
    height: 100,
    borderWidth: 1,
    padding: 10,
  },
  textoaula: {
    padding:10, 
    fontSize: 40
  },

})