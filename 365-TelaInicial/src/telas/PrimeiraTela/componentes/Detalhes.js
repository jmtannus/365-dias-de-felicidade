import React from 'react';
import { Image, StyleSheet, SafeAreaView, Dimensions, View } from 'react-native';
import Texto from '../../../componentes/Texto';
import Botao from '../../../componentes/Botao';

const width = Dimensions.get('screen').width;

export default function Detalhes({ subtitulo, login, senha, base, botao, navigation }) {
    return <>
        <SafeAreaView>
            <Texto style={estilos.subtitulo}>{subtitulo}</Texto>

            <View style={estilos.logEsenha}>
                <Texto style={estilos.login}>{login}</Texto>
                <Texto style={estilos.senha}>{senha}</Texto>
            </View>

            <Botao texto={botao} style={estilos.botao} onPress={() => navigation.navigate('SegundaTela')} />
            <Image source={base} style={estilos.base} />
        </SafeAreaView>
    </>
}
const estilos = StyleSheet.create({
    subtitulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 18,
        lineHeight: 476,
        color: "#899e44",
        fontWeight: "bold",
        marginTop: 28,
        marginLeft: 8,
    },
    descrição: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    //virar caixa de texto de entrada de e-mail
    logEsenha: {
        flexDirection: "column",
        paddingVertical: 125,
        alignItems: "center",
    },
    login: {
        color: "#d1ab6f",
        fontSize: 21,
        lineHeight: 20,
        marginTop: 60,
        marginRight: 38,
        fontWeight: "bold",
        textAlign: "center",
    },
    //virar caixa de texto de entrada de senha
    senha: {
        color: "#d1ab6f",
        fontSize: 21,
        lineHeight: 20,
        marginTop: 8,
        fontWeight: "bold",
        textAlign: "center",
    },
    botao: {
        marginTop: 260,
        marginLeft: 50,
        marginRight: 16,
        position: "absolute",
    },
    base: {
        width: "100%",
        height: 1252 / 2675 * width,
        lineHeight: 22,
        marginTop: -28,
    },
})