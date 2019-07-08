import React from 'react';
import { 
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

const imgComida1 = require('../../../assets/comida1.jpeg');

export default class Comida1 extends React.Component {
  render() {
    return (
      <View>
       
       
        <View style={styles.cabecalho}>
          <Text style={styles.txtTitulo}>Misto Quente</Text>
        </View>

        <View style={styles.detalhe}>
          <Image style={styles.imgMenu} source={imgComida1} />
          <Text style={styles.txtDetalheTitulo}>Ingredientes</Text>
          <Text style={styles.txtDetalhe}>Pão</Text>
          <Text style={styles.txtDetalhe}>Mussarela</Text>
          <Text style={styles.txtDetalhe}>Presunto</Text>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    cabecalho: {
      flexDirection: 'row',
      marginTop: 20
    },
    txtTitulo: {
      fontSize: 30,
      color: '#b9c941',
      marginLeft: 10,
      marginTop: 20
    },
    detalhe: {
      padding: 20,
      marginTop: 10
    },
    txtDetalheTitulo:{
        fontSize: 26,
        color: '#222222',
        marginLeft: 10,
        marginTop: 20
    },
    txtDetalhe: {
      fontSize: 20,
      color: '#222222',
      marginLeft: 10,
      marginTop: 20
    },
    imgMenu: {
        margin: 15,
        width: 120,
        height: 120,
      }
});
