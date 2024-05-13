import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Header from "./components/header";
import Card from "./components/card";
import rotinas from "./rotina";

export default function App() {
  return (
    <View style={estilo.container}>
      <Header />

      <FlatList
        data={rotinas}
        keyExtractor={(item) => item.id}
       
        contentContainerStyle={estilo.listaContainer}
        renderItem={({ item }) => (
          <Card
            image={item.imagem}
            title_task={item.titulo}
            preco={item.preco}
            nome={item.nome}
            descricao={item.descricao}
            disponibilidade={item.disponibilidade}
          />
        )}
      />
    </View>
  );
}

const estilo = StyleSheet.create({
  listaContainer: {
    flexDirection: 'row', // Organiza os itens em uma linha
    flexWrap: 'wrap', // Permite que os itens quebrem
  }});
