import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Stack, TextInput } from "@react-native-material/core";

export default function CaixaDeTexto({ }) {
  return (
    <Stack spacing={2} style={{ margin: 12 }}>
      <View style={{ paddingTop: 8 }}>
        <Text style={estilos.desejo}>Desejos pra vida</Text>
        <TextInput
          style={estilos.inputText}
          placeholder="FELICIDADE (pra cansar a bochecha de tanto sorrir)"
          variant="outlined"
          maxLength={151} 
          multiline numberOfLines={5}
        />
      </View>
    </Stack>
  );
}
const estilos = StyleSheet.create({
  inputText: {
     padding: 10,
      marginLeft: 10,
      marginTop: 8,
      width: 270,
      height: 80,
      borderWidth: 1,
      textAlign: "auto",
      borderColor: "#d4bb94",
      borderRadius: 3,
  },
  desejo: {
    padding: 8,
    fontSize: 15,
    color: "#899e44",
  },

})