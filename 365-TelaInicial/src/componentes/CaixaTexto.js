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
    borderRadius: 2,
    padding: 10,
  },
  desejo: {
    padding: 8,
    fontSize: 15,
    color: "#899e44",
  },

})