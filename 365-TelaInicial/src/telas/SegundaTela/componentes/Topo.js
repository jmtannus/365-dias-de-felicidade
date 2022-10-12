//index rnbc
import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

import Texto from './../../../componentes/Texto';
import pergunta from '../../../../assets/pergunta.png';
import tresCoisas from '../../../../assets/tresCoisas.png';

const width = Dimensions.get( 'screen' ).width;

export default function Topo( {titulo, topo, pergunta, tresCoisas } ) {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}> { titulo } </Texto>
        <Image source={pergunta} style={estilos.pergunta} />
        <Image source={tresCoisas} style={estilos.tresCoisas} />
    </>;
}
const estilos = StyleSheet.create({
    topo: {
      width: "100%",
      height: 349 / 640 * width,
    },
    pergunta: {
      width: 280,
      height: 220,
      marginTop: 100,
      marginLeft: 40,
      position: "absolute",
    },
    tresCoisas: {
      width: "100%",
      height: 249 / 1111 * width,
    },
    titulo: {
      width: "100%",
      position: "absolute",
      textAlign: "center",
      fontSize: 16,
      lineHeight: 26,
      color: "#6d9bbf",
      fontWeight: "bold",
      padding: 16,
    },
  })