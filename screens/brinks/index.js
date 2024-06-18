import React from 'react';
import { Text, StyleSheet, View, Image, FlatList} from 'react-native';
import Header from '../../components/header';
import Card from '../../components/card';
import ROTINAS from '../../rotina/index.js';
import { useRoute } from '@react-navigation/native';


export default function Home() {

    const route = useRoute()
    const {titulo,imagem,descricao,preco,disponibilidade} = route.params.props

  return (
    <View style={estilo.container}>

     <Text>{imagem}</Text>
     <Text style={estilo.tituloCard}>{titulo}</Text>
     <Text style={estilo.textoCard}>{disponibilidade}</Text>
     <Text style={estilo.precoCard}>{preco}</Text>
     <Text style={estilo.descricaoCard}>{descricao}</Text>

   
    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#CAF0F8',
    borderColor: '#90E0EF',
    paddingHorizontal: 20,
    
  },
  tituloCard: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1d3557",
    textAlign: "center",
    marginBottom: 10,
  },
  textoCard: {
    fontSize: 14,
    color: "#1d3557",
    textAlign: "center",
    marginBottom: 10,
  },
  imagemCard: {
    width: "100%", // Definindo a largura da imagem como 100% do card
    height: 150, // Definindo uma altura fixa para todas as imagens
    marginBottom: 10,
    borderRadius: 10,
  },
});