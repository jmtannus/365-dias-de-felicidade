//index rnbc
import React from 'react';
import { Image, StyleSheet, Dimensions, ImageBackground, View } from 'react-native';

import Texto from './../../../componentes/Texto';
import Botao from '../../../componentes/Botao';

import textos from '../../../mocks/textos';

const width = Dimensions.get( 'screen' ).width;

export default function TelaTucano( {navigation } ) {
    return <> 
        <View >
            <Texto style={estilos.subtitulo}>{ textos.telaTucano.subtitulo }</Texto>
            <ImageBackground source={require('../../../../assets/telaTucano.png')} style={estilos.telaTucano} >
                <Image source={textos.telaTucano.logo} style={estilos.logo} />
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
        width: 384,
        height: 760,
    },
    titulo: {
      textAlign: "center",
      fontSize: 16,
      lineHeight: 26,
      color: "#5f7862",
      fontWeight: "bold",
      padding: 16,
    },
    subtitulo: {
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "#899e44",
        fontWeight: "bold",
        padding: 16,
    },
    logo: {
        width: 330,
        height: 260,
        marginTop: 110,
        marginLeft: 18,
        position: "absolute",
    },
    botaoSalvar: {
        marginTop: 400,
        marginLeft:32,
        marginRight: 32,
        position: "absolute",
        textAlign: "center",
    },
  })