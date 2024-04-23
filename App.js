import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Header from "./components/header";
import Card from "./components/card";
import rotinas from "./rotina"

export default function App() {
  return (
    <View style={{width:'100%'}}>
      <Header></Header>

      <FlatList
      
      data = {rotinas}
      keyExtractor = {(item)=>item.id} 
      renderItem = {({item}) => (
        <Card
        image = {item.imagem}
        title_task = {item.titulo}
        preco = {item.preco}
        nome = {item.nome}
        />
      )}
      
        
      
      />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",

    backgroundColor: "#CAF0F8",

    borderColor: "#90E0EF",

    paddingHorizontal: 20,
  },
});
