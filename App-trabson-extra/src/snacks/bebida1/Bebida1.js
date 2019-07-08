import React from 'react';
import { 
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

const imgBebida1 = require('../../../assets/bebida1.jpg');

export default class Bebida1 extends React.Component {
  render() {
    return (
      <View>
       
        <View style={styles.cabecalho}>
          <Text style={styles.txtTitulo}>Suco Verde</Text>
        </View>

        <View style={styles.detalhe}>
          <Image style={styles.imgMenu} source={imgBebida1} />
          <Text style={styles.txtDetalheTitulo}>Ingredientes</Text>
          <Text style={styles.txtDetalhe}>Couve</Text>
          <Text style={styles.txtDetalhe}>Limão</Text>
          <Text style={styles.txtDetalhe}>Laranja</Text>
          <Text style={styles.txtDetalhe}>Gengibre</Text>
          <Text style={styles.txtDetalhe}>Água</Text>

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
