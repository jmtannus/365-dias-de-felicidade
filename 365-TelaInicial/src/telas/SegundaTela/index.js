import React from "react";
import { StyleSheet, View } from "react-native";
import TelaTucano from "./componentes/TelaTucano";

export default function SegundaTela({navigation}) {
  return <>
    <View style={estilos.inicial}>
      <TelaTucano navigation={navigation}/>
    </View>
  </>
}
const estilos = StyleSheet.create({
  inicial: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  
})