import React from 'react';
import { SafeAreaView, ImageBackground, StyleSheet, View } from 'react-native';
import Texto from '../../../componentes/Texto';
import CaixaTexto from '../../../componentes/CaixaTexto';
import Botao from '../../../componentes/Botao';
import telaTucano from '../../assets/telaTucano.png';

export default function TelaEscrita({ subtitulo, botao, navigation, titulo, botaoSalvar }) {
    return <>
            <ImageBackground source={require('../../../../assets/telaTucano.png')} style={{width: '100%', height: '100%'}}/>
            <Botao texto={botao} style={estilos.botao} onPress={() => navigation.navigate('PrimeiraTela')} />
            <View style={estilos.container}>      
                    <Texto style={estilos.titulo}> { titulo } </Texto>
                    <View>
                        <CaixaTexto style={estilos.subtitulo}> { subtitulo } </CaixaTexto>
                        <Botao texto={botaoSalvar} style={estilos.botaoSalvar} onPress={() => navigation.navigate('TerceiraTela')} />
                    </View>
            </View>
    </>
};
const estilos= StyleSheet.create({
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
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center"
    },
    telaTucano: {
        width: '100%',
        height: '100%'
    },
    container: {
        flex: 1,
        flexDirection: "column"
    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center"
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
    botaoSalvar: {
        marginTop: 285,
        marginLeft:50,
        marginRight: 16,
        position: "absolute",
    },
});