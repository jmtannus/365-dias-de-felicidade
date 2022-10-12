import React from "react";
import { StyleSheet, View } from "react-native";

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';

import mock from '../../mocks/primeiraTela';

export default function SegundaTela() {
  return <>
    <Topo {...mock.topo} />
    <View style={estilos.inicial}>
      <Detalhes {...mock.detalhes} />
    </View>
  </>
}
const estilos = StyleSheet.create({
  inicial: {
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
})