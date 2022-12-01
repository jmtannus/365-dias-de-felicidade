import React from 'react';
import { View, StyleSheet, ImageBackground, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { TextInput } from "@react-native-material/core";
import Botao from '../../../componentes/Botao';
import Texto from '../../../componentes/Texto';

export default function TelaTresTextos({ titulo, navigation }) {
  return (<>
    <ScrollView>
      <SafeAreaView style={estilos.container}>
        <ImageBackground source={require('../../../../assets/tela_mostra.png')} style={estilos.telaTresTextos}>
          <View style={estilos.logEsenha}>
            <Texto style={estilos.titulo}> {titulo} </Texto>
            <TextInput style={estilos.mensagemUm} placeholder="primeiro" variant="outlined" maxLength={151} multiline numberOfLines={5}/>
            <TextInput style={estilos.mensagemDois} placeholder="segundo" variant="outlined" maxLength={151} multiline numberOfLines={5}/>
            <TextInput style={estilos.mensagemTres} placeholder="terceiro" variant="outlined" maxLength={151} multiline numberOfLines={5}/>
            <Botao texto='salvar' style={estilos.botaoSalvar} onPress={() => navigation.navigate('SegundaTela')} />
            <Botao texto='voltar' style={estilos.botao} onPress={() => navigation.navigate('PrimeiraTela')} />
        </View>
        </ImageBackground>
      </SafeAreaView>
    </ScrollView>
  </>
  );
}
const estilos = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: "column",
      marginTop: StatusBar.currentHeight || 0
  },
  telaTresTextos: {
      width: 368,
      height: 825,
      flexDirection: "row",
  },
  logEsenha: {
      flexDirection: "column",
      paddingVertical: 10,
      alignItems: "center",
  },
  titulo: {
      width: "100%",
      position: "absolute",
      textAlign: "center",
      fontSize: 11,
      lineHeight: 22,
      color: "#5f7862",
      fontWeight: "bold",
  },
  mensagemUm: {
      padding: 10,
      marginLeft: 10,
      marginTop: 250,
      width: 270,
      height: 120,
      borderWidth: 1,
      textAlign: "auto",
      borderColor: "#d4bb94",
      borderRadius: 3,
  },
  mensagemDois: {
      padding: 10,
      marginVertical: 30,
      marginHorizontal: 40,
      marginLeft: 55,
      width: 270,
      height: 120,
      borderWidth: 1,
      textAlign: "'justify',",
      borderColor: "#d4bb94",
      borderRadius: 3,
  },
  mensagemTres: {
      padding: 10,
      marginHorizontal: 40,
      marginLeft: 55,
      width: 270,
      height: 120,
      borderWidth: 1,
      textAlign: "center",
      borderColor: "#d4bb94",
      borderRadius: 3,
  },
  botaoSalvar: {
      marginTop: 710,
      width: 260,
      height: 40,
      position: "absolute",
  },
  botao: {
      marginTop: 765,
      width: 260,
      height: 40,
      marginLeft: 50,
      marginRight: 14,
      position: "absolute",
  },
})