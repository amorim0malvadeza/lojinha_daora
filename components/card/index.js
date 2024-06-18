import { Text, View, Image , TouchableOpacity} from "react-native";
import estilo from "./style";
import { useNavigation } from '@react-navigation/native';
import imagem from "../../rotina/index.js"

export default function Card(props){
  const {titulo,imagem,descricao,preco,disponibilidade} = props
  const navigation = useNavigation();

  return(
      <TouchableOpacity style={estilo.cardTarefa} onPress={()=>navigation.navigate('brinks',{props:props})}>
          <Image style={estilo.imagemCard} source={{ uri: imagem }} />
          <View style={{  marginLeft: 15,width:150 }}>
               <Text style={estilo.tituloCard}>{titulo}</Text>
              <Text style={estilo.textoCard}>{descricao}</Text>
              <Text style={estilo.precoCard}>{preco}</Text>
              <Text style={estilo.disponibilidadeCard}>{disponibilidade}</Text>
          </View>
      </TouchableOpacity>
  )
}

