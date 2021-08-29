import * as React from 'react';
import {Text, View, StyleSheet } from 'react-native';

export default  function Busca(){
  return(
    <View style={estilo.container}>
    <Text style={estilo.titulo}>Busca de pedidos</Text>

    </View>

  );
}

const estilo = StyleSheet.create(
  {
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: '#2a9d8f'
    },
    titulo:{
      fontSize: 20,
      color:'#ffffff'
    }

  }
)