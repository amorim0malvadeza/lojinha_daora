import {StyleSheet} from 'react-native'

const estilo = StyleSheet.create({
    cardTarefa: {
      marginTop: 20,
      backgroundColor: '#A8DADC',
      width: 325,
      height: 225,
      alignItems:'center',
      justifyContent:'space-between',
      borderRadius: 10,
      flexDirection: 'collumn',
      padding: 15,
      marginRight:15
    },
    tituloCard: {
      fontSize: 13,
      fontWeight: 'bold',
      color: '#1d3557',
    },
    textoCard: {
      fontSize: 10,
      marginTop: 5,
    },
    imagemCard: {
      width: 120,
      height: 100,
      marginRight: 15,
    },
  });

  export default estilo;