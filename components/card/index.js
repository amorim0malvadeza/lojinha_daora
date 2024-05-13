import { Text, View, Image } from "react-native";
import estilo from "./style";


export default function Card(props) {
  return (
    <>
      <View style={estilo.cardTarefa}>
        
        <Image style={estilo.imagemCard} source={{ uri: props.image }} />

        <View style={{ marginLeft: 15, width: 150 }}>
          <Text style={estilo.tituloCard}>{props.title_task}</Text>

          <Text style={estilo.textoCard}>{props.preco}</Text>
        </View>

        <Text style={{ fontSize: 25 }}>{props.nome}</Text>
        <Text style={{ fontSize: 15 }}>{props.descricao}</Text>
        <Text style={{ fontSize: 15 }}>{props.disponibilidade}</Text>
      </View>
    </>
  );
}
