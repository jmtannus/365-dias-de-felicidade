import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Texto({ children, style }) {
    let estilo = estilos.texto;
    if (style?.fontWeight === 'bold') {
        estilo = estilos.textoNegrito;
    }
    return <Text style={[style, estilo]}>{children}</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal",
    },
    textoNegrito: {
        fontFamily: "MontserratBold",
        fontWeight: "normal",
        maxLength: 40,
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
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "#5f7862",
        fontWeight: "bold",
        padding: 16,
    },
})