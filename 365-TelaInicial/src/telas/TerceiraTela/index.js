import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, ImageBackground, ScrollView } from "react-native";

import Botao from '../../componentes/Botao';

const DATA = [
  {
    id: "1",
    title: "Ter passado mais um dia feliz com minha família",
  },
  {
    id: "2",
    title: "Ver o aplicativo 365 dias de felicidade funcionando pela primeira vez!",
  }, 
  {
    id: "3",
    title: "Olhar para o céu e ver o céu limpo e iluminado pela maior lua do ano!",
  },
];

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
        <ImageBackground source={require('../../../assets/backgndLFlor.png')} style={estilos.bgdLaranjaFlor} >
          <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
          />
        <Botao texto='Voltar' style={estilos.botao} onPress={() => navigation.navigate('PrimeiraTela')} />
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
    marginTop: 470,
    marginLeft:50,
    marginRight: 16,
    position: "absolute",
  },
  bgdLaranjaFlor: {
    width: 378,
    height: 788,
},
  
});
