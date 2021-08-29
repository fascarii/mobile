import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image,TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Staatliches_400Regular,
  RobotoCondensed_300Light,
  OpenSans_400Regular,
  Bevan_400Regular,
} from '@expo-google-fonts/dev';

export default function App() {
  let [fontsLoaded] = useFonts({
    Staatliches_400Regular,
    RobotoCondensed_300Light,
    OpenSans_400Regular,
    Bevan_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={estilo.container}>
        <Text style={estilo.nomeApp}>Instrumentos</Text>
        <FlatList
          data={DadosInstrumentos}
          keyExtractor={(item) => {
            item.uid.toString();
          }}
          renderItem={({ item }) => (
            <View style={estilo.blocos}>
              <View>
                <Image style={estilo.img} source={{ uri: item.img }} />
              </View>
              <View style={estilo.infoInstrumento}>
                <Text style={estilo.nomeInstrumento}> {item.instrumento} </Text>
                <Text> {item.familia} </Text>
              </View>
            </View>
          )}
        />
        <TouchableOpacity onPress={() => alert('Adicionar item?')} style={estilo.fab}>
          <Text style={estilo.fabIcon}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// Variável que armazena os estilos
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a87245',
    padding: 8,    
    fontFamily: 'RobotoCondensed_300Light',
  },
  img: {
    resizeMode: 'cover',
    width: 60,
    margin: 2,
    height: '100%',
  },
  blocos: {
    flexDirection: 'row',
    backgroundColor: '#ffe0b2',
    width: 300,
    height: 80,
    marginVertical: 8,
    borderRadius: 6,
  },
  infoInstrumento: {
    margin: 20,
    alignContent: 'center',
  },
  nomeInstrumento: {
    fontSize: 20,
    color: '#76461c',
    fontWeight: 'bold',    
    fontFamily: 'RobotoCondensed_300Light',
  },
  nomeApp: {
    margin: 10,
    color: 'white',
    fontSize: 20,    
    fontFamily: 'Bevan_400Regular',
  },
   fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#76461c',
    borderRadius: 30,
    elevation: 8
  },
  fabIcon: {
    fontSize: 50,
    color: 'white'
  }
});

const DadosInstrumentos = [
  {
    uid: 1,
    instrumento: 'Violino',
    familia: 'Cordas',
    img:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Old_violin.jpg/200px-Old_violin.jpg',
  },
  {
    uid: 2,
    instrumento: 'Saxofone',
    familia: 'Madeiras',
    img: 'https://cdn.awsli.com.br/180/180796/produto/39153202f854c6cf1d.jpg',
  },
  {
    uid: 3,
    instrumento: 'Oboé',
    familia: 'Madeiras',
    img:
      'https://st2.depositphotos.com/1356916/8705/i/600/depositphotos_87057316-stock-photo-oboe-woodwind-musical-instruments.jpg',
  },
  {
    uid: 4,
    instrumento: 'Violão',
    familia: 'Cordas',
    img:
      'https://d3ddx6b2p2pevg.cloudfront.net/Custom/Content/Products/10/78/1078437_violao-takamine-acustico-gd10-natural_s1_637433754561001751.jpg',
  },
  {
    uid: 5,
    instrumento: 'Gaita',
    familia: 'Madeiras',
    img:
      'https://a-static.mlcdn.com.br/618x463/gaita-hering-master-blues-20-vozes-em-do-c-com-estojo-9020c/made4music/9020c/9f62c9cee31f254ec58dc7629cdc5458.jpg',
  },
  {
    uid: 6,
    instrumento: 'Piano',
    familia: 'Cordas',
    img:
      'https://ae01.alicdn.com/kf/HTB1eZEia.T1gK0jSZFhq6yAtVXax/Modelo-de-piano-em-miniatura-com-mini-teclas-acess-rio-de-decora-o-para-piano-preto.jpg',
  },
  {
    uid: 7,
    instrumento: 'Tímpano',
    familia: 'Membranofones ',
    img:
      'https://lh3.googleusercontent.com/proxy/qnp0sN2z9VWKuiLzbu6DaaAmfyPwNqfvR2F2A6kR4ScVCKQcNsHrBD05xWjrpN6drKoMr_wKMQ2cDVQmfiEBvbz6Pf3uL3OqVWqpO8WjPlTIpQ',
  },
  {
    uid: 8,
    instrumento: 'Prato',
    familia: 'Percussão',
    img:
      'https://www.ofertaviva.com.br/photo-4/15-cm-5-9-polegada-mini-criancas-pequenas-de-cobre-mao-pratos-gong-banda-ritmo-percussao-instrumento-musical-brinquedo.jpg',
  },
  {
    uid: 9,
    instrumento: 'Viola',
    familia: 'Cordas',
    img:
      'https://imageswscdn.wslojas.com.br/files/7106/MED_486_viola-caipira-rozini-almir-pessoa-rv222.jpg',
  },
  {
    uid: 10,
    instrumento: 'Bateria',
    familia: 'Percussão',
    img:
      'https://a-static.mlcdn.com.br/618x463/bateria-completa-vermelha-ferragens-cromadas-profire-by-spanking/dlsmultimarcasloja/2389-1963/cec8673dcfaa49e349c5fcf7eeea012d.jpg',
  },
];
