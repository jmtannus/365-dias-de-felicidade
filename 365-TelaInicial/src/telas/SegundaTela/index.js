import React from "react";
import { StyleSheet, View } from "react-native";
import TelaTucano from "./componentes/TelaTucano";

import mock from '../../mocks/textos';

export default function SegundaTela() {
  return <>
    <View style={estilos.inicial}>
      <TelaTucano {...mock.telaEscrita} />
    </View>
  </>
}
const estilos = StyleSheet.create({
  inicial: {
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
})