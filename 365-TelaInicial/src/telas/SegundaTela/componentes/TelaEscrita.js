import React from 'react';
import { SafeAreaView, ImageBackground, StyleSheet } from 'react-native';
import Texto from '../../../componentes/Texto';
import CaixaTexto from '../../../componentes/CaixaTexto';

import Botao from '../../../componentes/Botao';

export default function TelaEscrita({ botao, navigation }) {
    return <>
        <SafeAreaView>
            <ImageBackground source={require('../../../../assets/tela2.png')} style={estilos.imageBackground}/>
            <Texto style={estilos.subtitulo}>{ subtitulo }</Texto>
            <Botao texto={botao} style={estilos.botao} onPress={() => navigation.navigate('SegundaTela')} />
            

            <View style={estilos.container}>
                <ImageBackground source={require('../../../../assets/tela2.png')} style={estilos.imageBackground}>      
                    <Texto style={estilos.titulo}> { titulo } </Texto>
                    <View>
                        <CaixaTexto style={estilos.titulo}> { titulo } </CaixaTexto>
                    </View>
                </ImageBackground>
            </View>
        </SafeAreaView>
    </>
};
const estilos= StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
      },
      imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center"
      },
      text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center"
      },
        subtitulo: {
            width: "100%",
            position: "absolute",
            textAlign: "center",
            fontSize: 18,
            lineHeight: 476,
            color: "#899e44",
            fontWeight: "bold",
            marginTop: 48,
            marginLeft: 8,
        },
        botao: {
            marginTop: 285,
            marginLeft:50,
            marginRight: 16,
            position: "absolute",
        },
});