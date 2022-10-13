import React from "react";
import { StyleSheet, View } from "react-native";
import TelaEscrita from "./componentes/TelaEscrita";

import mock from '../../mocks/textos';

export default function SegundaTela() {
  return <>
    <View style={estilos.inicial}>
      <TelaEscrita {...mock.telaEscrita} />
    </View>
  </>
}
const estilos = StyleSheet.create({
  inicial: {
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
})