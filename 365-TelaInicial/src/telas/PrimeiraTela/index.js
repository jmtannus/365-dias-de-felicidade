import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';

export default function PrimeiraTela({ topo, detalhes}) {
  return <ScrollView>
    <Topo {...topo} />
    <View style={estilos.inicial}>
      <Detalhes {...detalhes} />
    </View>
  </ScrollView>
}
const estilos = StyleSheet.create({
  inicial: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    
  },
})