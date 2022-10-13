//index rnbc
import React from 'react';
import { Image, StyleSheet, ImageBackground, View } from 'react-native';

import Texto from './../../../componentes/Texto';
import Botao from '../../../componentes/Botao';
import CaixaTexto from '../../../componentes/CaixaTexto';

import textos from '../../../mocks/textos';

export default function TelaTucano( {navigation } ) {
    return <> 
        <View >
            <ImageBackground source={require('../../../../assets/telaTucano.png')} style={estilos.telaTucano} >
            <   Image source={textos.telaTucano.logo} style={estilos.logo} />
                <Texto style={estilos.titulo}>{ textos.telaTucano.titulo }</Texto>
                <Texto style={estilos.subtitulo}>{ textos.telaTucano.subtitulo }</Texto>
                <Texto style={estilos.subtitulo1}>{ textos.telaTucano.subtitulo1 }</Texto>
                <CaixaTexto style={estilos.caixadetexto}>{ textos.telaTucano.caixadetexto }</CaixaTexto>

                <Botao texto={textos.telaTucano.botaoSalvar} style={estilos.botaoSalvar} onPress={() => navigation.navigate('PrimeiraTela')} />
            </ImageBackground>
        </View>
    </>;
}
const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    telaTucano: {
        width: 378,
        height: 788,
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
    logo: {
        width: 187,
        height: 150,
        marginTop: 40,
        marginLeft: 18,
        position: "absolute",
    },
    subtitulo: {
        color: "#d1ab6f",
        fontSize: 20,
        lineHeight: 22,
        marginTop: 230,
        fontWeight: "bold",
        textAlign: "center",
    },
    subtitulo1: {
        color: "#d1ab6f",
        fontSize: 19,
        lineHeight: 24,
        marginTop: 8,
        fontWeight: "bold",
        textAlign: "center",
    },
    caixadetexto: {
        color: "#fff",
        fontSize: 15,
        lineHeight: 22,
        marginTop: 230,
        fontWeight: "bold",
        textAlign: "center",

    },

    botaoSalvar: {
        marginTop: 450,
        marginLeft: 40,
        marginRight: 40,
        position: "absolute",
        textAlign: "center",
    },
  })