import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
  cardTarefa: {
    backgroundColor: "#A8DADC",
    width: "96%", 
    height:"96%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#457B9D",
    marginLeft: 10,
    marginRight : 20,
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

export default estilo;
