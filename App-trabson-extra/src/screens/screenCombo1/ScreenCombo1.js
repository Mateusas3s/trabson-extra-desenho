import React from 'react';
import { 
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    StatusBar,
} from 'react-native';
import Bebida1 from '../../snacks/bebida1/Bebida1';
import Comida1 from '../../snacks/comida1/Comida1';

const imgComida1 = require('../../../assets/comida1.jpeg');
import BarraNavegacao from '../../barNavigation/BarraNavegacao';

export default class ScreenCombo1 extends React.Component {
  render() {
    return (
      <ScrollView>
        <StatusBar backgroundColor= '#ccc' />
        <BarraNavegacao voltar navigator={this.props.navigator} />
        <Bebida1/>
        <Comida1/>
      </ScrollView>
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
