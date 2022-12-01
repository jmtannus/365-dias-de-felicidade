import React, { } from "react";
import { SafeAreaView, StatusBar, StyleSheet, ImageBackground, ScrollView } from "react-native";
import Botao from '../../componentes/Botao';

export default function QuartaTela({ navigation }) {
  return (
    <ScrollView>
      <SafeAreaView style={estilos.container}>
        <ImageBackground source={require('../../../assets/telaCadastro.png')} style={estilos.bgdTelaCadastro} >
          <Botao texto='inscrito' style={estilos.botaoCadastro} onPress={() => navigation.navigate('SegundaTela')} />
          <Botao texto='voltar' style={estilos.botao} onPress={() => navigation.navigate('PrimeiraTela')} />
        </ImageBackground>
      </SafeAreaView>
    </ScrollView>
  );
}
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: StatusBar.currentHeight || 0,
  },
  bgdTelaCadastro: {
    width: 360,
    height: 788,
    flexDirection: "row",
  },
  botaoCadastro: {
    marginTop: 499,
    width: 279,
    height: 40,
    marginLeft: 50,
    marginRight: 14,
    position: "absolute",
  },
  botao: {
    marginTop: 551,
    width: 279,
    height: 40,
    marginLeft: 50,
    marginRight: 14,
    position: "absolute",
  },
});
