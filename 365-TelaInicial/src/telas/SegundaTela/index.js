import React from "react";
import { StyleSheet, View } from "react-native";

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';

export default function SegundaTela({ topo, detalhes }) {
  return <>
    <Topo {...topo} />
    <View style={estilos.inicial}>
      <Detalhes {...detalhes} />
    </View>
  </>
}
const estilos = StyleSheet.create({
  inicial: {
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
})