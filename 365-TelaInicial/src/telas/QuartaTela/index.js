import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, ImageBackground, ScrollView } from "react-native";

import Botao from '../../componentes/Botao';

export default function TerceiraTela({navigation}) {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#69a155" : "#5af269";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <ScrollView>
      <SafeAreaView style={estilos.container}>    
        <ImageBackground source={require('../../../assets/telaCadastro.png')} style={estilos.bgdTelaCadastro} >
        <Botao texto='voltar' style={estilos.botao} onPress={() => navigation.navigate('PrimeiraTela')} />
        </ImageBackground>     
      </SafeAreaView>
    </ScrollView>
  );
}

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[estilos.item, backgroundColor]}>
    <Text style={[estilos.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 18,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
  },
  botao: {
    marginTop: 551,
    width: 279,
    height: 40,
    marginLeft: 50,
    marginRight: 14,
    position: "absolute",
  },
  botaoCadastro: {
    marginTop: 368,
    marginLeft: 50,
    marginRight: 14,
    position: "absolute",
},
  bgdTelaCadastro: {
    width: 378,
    height: 788,
},
  
});
