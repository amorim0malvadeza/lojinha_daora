import { View, Text } from "react-native";
import estilo from "./style.js";

export default function Header() {
  return (
    <>
      <Text style={estilo.titulo}>
    
        Loja de brinquedo</Text>


      <View
        style={{

          width: "95%",
          flexDirection: "row",
          marginTop: 20,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
      </View>
    </>
  );
}