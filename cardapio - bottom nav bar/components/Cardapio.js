import * as React from 'react';
import {Text, View, StyleSheet } from 'react-native';

export default function Busca(){
  return(
    <View style={estilo.container}>
    <Text style={estilo.titulo}>Cardápio </Text>

    </View>

  );
}

const estilo = StyleSheet.create(
  {
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: '#e9c46a'
    },
    titulo:{
      fontSize: 20,
      color:'#445500'

    }

  }
)