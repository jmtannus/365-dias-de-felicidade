import React from 'react';
import {Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get( 'screen' ).width;

export default function Detalhes({ subtitulo, base, caixaTexto, }) {
    return <>
        <Texto style={estilos.subtitulo}>{ subtitulo }</Texto>
        <Image source={base} style={estilos.base} />
        
        <View style={estilos.numero}>
            <Text style={estilos.caixaTexto}>{ caixaTexto }</Text>
        </View>
    </>
}
const estilos = StyleSheet.create({
    numero: {
        flexDirection: "row",
        paddingVertical:12,
    },
    base: {
        width: "100%",
        height: 1252 / 2675 * width,
        marginTop: 50,
        //paddingTop:"100%",
    },
    subtitulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 18,
        lineHeight: 126,
        color: "#4682B4",
        fontWeight: "bold",
        marginTop: 56,
    },
    imagemNumero1: {
        width: 32,
        height: 32,
    },
    caixaTexto: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    },
})
