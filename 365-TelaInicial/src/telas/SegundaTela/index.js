import React from "react";
import { StyleSheet, View } from "react-native";
import TelaEscrita from "./componentes/TelaEscrita";

import mock from '../../mocks/textos';

export default function SegundaTela() {
  return <>
    <TelaEscrita {...mock.textos} />
    <View style={estilos.inicial}>
      <TelaEscrita {...mock.textos} />
    </View>
  </>
}
const estilos = StyleSheet.create({
  inicial: {
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
})