import React from 'react';
import { 
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    StatusBar,
    TouchableHighlight,
    Alert
} from 'react-native';

export default class BuyButton extends React.Component {
  render() {
    return (
      <View style = {{alignContent:'center',alignItems:'center'}}>
        <TouchableHighlight style={{marginTop: 20, marginBottom:40 }} onPress = {()=>{
            Alert.alert("Compra finalizada com sucesso!");
        }}>
        <Text style={{fontSize:20,color:'#b9c941'}}> Finalizar compra </Text>
        </TouchableHighlight>
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
