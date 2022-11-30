import React from 'react';
import { Image, StyleSheet, SafeAreaView, Dimensions, View } from 'react-native';
import Texto from '../../../componentes/Texto';
import telaCadastro from '../../../../assets/telaCadastro.png';

const width = Dimensions.get('screen').width;

export default function TelaCadastro({ titulo, subtitulo, telaCadastro, caixaNome, novaSenha, caixaConfirme}) {
    return <>
        <SafeAreaView>
            <Image source={telaCadastro} style={estilos.telaCadastro} />
            <Texto style={estilos.titulo}> { titulo } </Texto>
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
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 11,
        lineHeight: 22,
        color: "#5f7862",
        fontWeight: "bold",
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
    subtitulo1: {
        color: "#d1ab6f",
        fontSize: 19,
        lineHeight: 24,
        marginTop: 8,
        fontWeight: "bold",
        textAlign: "center",
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
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
    //botão de cadastro
    botao: {
        marginTop: 320,
        marginLeft: 50,
        marginRight: 16,
        position: "absolute",
    },
});