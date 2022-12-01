import React from "react";
import { StyleSheet, View } from "react-native";
import TelaTresTextos from "./componentes/TelaTresTextos";

export default function QuintaTela({navigation}) {
  return <>
    <View style={estilos.inicial}>
      <TelaTresTextos navigation={navigation}/>
    </View>
  </>
}
const estilos = StyleSheet.create({
  inicial: {
    paddingVertical: 2,
    paddingHorizontal: 1,
  },
})