import React from 'react';
import {Image, StyleSheet, Dimensions, View } from 'react-native';

import Texto from '../../../componentes/Texto';
import Botao from '../../../componentes/Botao';

const width = Dimensions.get( 'screen' ).width;

export default function Detalhes({ subtitulo, login, senha, base, botao }) {
    return <>
        <Texto style={estilos.subtitulo}>{ subtitulo }</Texto>

        <View style={estilos.logEsenha}>
		    <Texto style={estilos.login}>{ login }</Texto>
        	<Texto style={estilos.senha}>{ senha }</Texto>
	    </View>

        <Botao texto={botao} style={estilos.botao} onPress={() => {}} />
        <Image source={base} style={estilos.base} /> 
    </>
}
const estilos = StyleSheet.create({
    subtitulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 21,
        lineHeight: 476,
        color: "#000",
        fontWeight: "bold",
        marginTop: 48,
        marginLeft: 8,
    },
    descrição: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    //virar caixa de texto de entrada de e-mail
    logEsenha: {
        flexDirection: "row",
        paddingVertical: 140,
        marginTop: 90,
        marginLeft: 70,
    },
    login: {
        color: "#d1ab6f",
        fontSize: 20,
        lineHeight: 30,
        marginRight: 38,
        fontWeight: "bold",
        //marginBottom: 45,
        textAlign: "center",
    },
    //virar caixa de texto de entrada de senha
    senha: {
        color: "#d1ab6f",
        fontSize: 20,
        lineHeight: 30,
        fontWeight: "bold",
        textAlign: "center",
    },
        botao: {
        marginTop: 285,
        marginLeft:50,
        marginRight: 16,
        position: "absolute",
    },
        base: {
        width: "100%",
        height: 1252 / 2675 * width,
        lineHeight: 26,
        //marginBotton: 280,
        
    },
})