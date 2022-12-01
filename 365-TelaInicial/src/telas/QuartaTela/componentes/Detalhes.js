import React from 'react';
import { Image, StyleSheet, SafeAreaView, Dimensions, View } from 'react-native';
import Texto from '../../../componentes/Texto';

const width = Dimensions.get('screen').width;

export default function TelaCadastro({ telaCadastro, subtitulo, caixaNome, novaSenha, caixaConfirme }) {
    return <>
        <SafeAreaView>
            <Image source={telaCadastro} style={estilos.telaCadastro} />
            <Texto style={estilos.subtitulo}>{subtitulo}</Texto>
            <View style={estilos.logEsenha}>
                <Texto style={estilos.caixaNome}>{caixaNome}</Texto>
                <Texto style={estilos.caixaEmail}>"e-mail"</Texto>
                <Texto style={estilos.caixaNovaSenha}>{novaSenha}</Texto>
                <Texto style={estilos.caixaConfirme}>{caixaConfirme}</Texto>
            </View>
        </SafeAreaView>
    </>
}
const estilos = StyleSheet.create({
    telaCadastro: {
        width: "100%",
        height: 1252 / 2675 * width,
        lineHeight: 22
    },
    subtitulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 22,
        lineHeight: 476,
        color: "#899e44",
        fontWeight: "bold",
        marginTop: -150,
    },
    //caixa de texto de entrada de e-mail
    logEsenha: {
        flexDirection: "column",
        paddingVertical: 70,
        alignItems: "center",
    },
    caixaNome: {
        flexDirection: "column",
        paddingVertical: 40,
        alignItems: "center",
    },
    caixaEmail: {
        flexDirection: "column",
        paddingVertical: 60,
        alignItems: "center",
    },
    caixaNovaSenha: {
        flexDirection: "column",
        paddingVertical: 70,
        alignItems: "center",
    },
    caixaConfirme: {
        flexDirection: "column",
        paddingVertical: 80,
        alignItems: "center",
    },
});