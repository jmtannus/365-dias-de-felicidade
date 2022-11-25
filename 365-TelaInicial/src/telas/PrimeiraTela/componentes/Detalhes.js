import React from 'react';
import { Image, StyleSheet, SafeAreaView, Dimensions, View } from 'react-native';
import Texto from '../../../componentes/Texto';
import Login from '../../../componentes/Login';
import Botao from '../../../componentes/Botao';
import Cadastro from '../../../componentes/Cadastro';
import textos from '../../../mocks/textos';

const width = Dimensions.get('screen').width;

export default function Detalhes({ subtitulo, login, senha, base, botao, botaoCadastro, navigation }) {
    return <>
        <SafeAreaView>
            <Texto style={estilos.subtitulo}>{subtitulo}</Texto>

            <View style={estilos.logEsenha}>
                <Login>{ textos.detalhes.login }</Login>
                <Texto style={estilos.login}>{login}</Texto>                
                <Texto style={estilos.senha}>{senha}</Texto>
            </View>
            <Botao texto={botao} style={estilos.botao} onPress={() => navigation.navigate('SegundaTela')} />
            <Cadastro texto={botaoCadastro} style={estilos.botaoCadastro} onPress={() => navigation.navigate('SegundaTela')}/>
            
            <Image source={base} style={estilos.base} />
        </SafeAreaView>
    </>
}
const estilos = StyleSheet.create({
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
    descrição: {
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
    botao: {
        marginTop: 320,
        marginLeft: 50,
        marginRight: 16,
        position: "absolute",
    },
    botaoCadastro: {
        marginTop: 368,
        marginLeft: 50,
        marginRight: 16,
        position: "absolute",
    },
    base: {
        width: "100%",
        height: 1252 / 2675 * width,
        lineHeight: 22,
        marginTop: -80,
    },
})