//index rnbc
import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

import Texto from '../../../componentes/Texto';

const width = Dimensions.get( 'screen' ).width;

export default function Topo( {titulo, topo, logo } ) {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}> { titulo } </Texto>
        <Image source={logo} style={estilos.logo} />
    </>;
}
const estilos = StyleSheet.create({
    topo: {
      width: "100%",
      height: 349 / 640 * width,
    },
    logo: {
      width: 226,
      height: 182,
      marginTop: 70,
      marginLeft: 28,
      position: "absolute",
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
  })