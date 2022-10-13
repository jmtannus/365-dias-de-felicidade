import React from "react";
import { StyleSheet, View } from "react-native";
import TelaTucano from "./componentes/TelaTucano";

import mock from '../../mocks/textos';

export default function SegundaTela({navigation}) {
  return <>
    <View style={estilos.inicial}>
      <TelaTucano navigation={navigation}/>
    </View>
  </>
}
const estilos = StyleSheet.create({
  inicial: {
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
})