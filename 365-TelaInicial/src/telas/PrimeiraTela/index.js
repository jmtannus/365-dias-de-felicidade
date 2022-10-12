import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';

import mock from '../../mocks/primeiraTela';

export default function PrimeiraTela({navigation}) {
  return <ScrollView>
    <Topo {...mock.topo} />
    <View style={estilos.inicial}>
      <Detalhes {...mock.detalhes} />
    </View>
  </ScrollView>
}
const estilos = StyleSheet.create({
  inicial: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    
  },
})