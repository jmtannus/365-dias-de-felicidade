//index rnbc
import React from 'react';
import { Image, StyleSheet, Dimensions, ImageBackground, View } from 'react-native';

import Texto from './../../../componentes/Texto';
import Botao from '../../../componentes/Botao';

const width = Dimensions.get( 'screen' ).width;

export default function TelaTucano( {telaTucano, titulo, subtitulo, logo, botaoSalvar } ) {
    return <> 
        <View style={estilos.container}>
            <ImageBackground source={require('../../../../assets/base.png')} style={estilos.telaTucano} >
                <Image source={logo} style={estilos.logo} />
                <Texto style={estilos.titulo}> { titulo } </Texto>
                <Texto style={estilos.subtitulo}> { subtitulo } </Texto>
                <Botao texto={botaoSalvar} style={estilos.botaoSalvar} onPress={() => navigation.navigate('PrimeiraTela')} />
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
        marginBotton: 285,
        marginLeft:16,
        marginRight: 16,
        //position: "absolute",
    },
  })