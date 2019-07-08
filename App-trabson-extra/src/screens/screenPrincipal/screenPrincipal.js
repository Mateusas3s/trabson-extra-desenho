import React from 'react';
import { 
    StyleSheet,
    View,
    StatusBar,
    Image,
    TouchableHighlight,
    Text
} from 'react-native';

import BarraNavegacao from '../../barNavigation/BarraNavegacao';

const imgComida1 = require('../../../assets/comida1.jpeg');
const imgBebida1 = require('../../../assets/bebida1.jpg');
const combo = require('../../../assets/download.jpeg');

export default class ScreenPrincipal extends React.Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor= '#ccc' />

        <BarraNavegacao />
       
        <View style={styles.menu}>
          <View style={styles.menuGroup}>
            <TouchableHighlight
              onPress={() => {
                this.props.navigator.push({ id: 'comida1' })
              }}
            >
              <Image style={styles.imgMenu} source={imgComida1} />
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => {
                this.props.navigator.push({ id: 'bebida1' })
              }}
            >
              <Image style={styles.imgMenu} source={imgBebida1} />
            </TouchableHighlight>


          </View>
            <TouchableHighlight 
              onPress = {() =>{
                this.props.navigator.push({ id: 'combo1' })
              }}
            >
              <Image style={styles.imgMenu} source={combo} />
            </TouchableHighlight>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    menu: {
      alignItems: 'center'
    },
    menuGroup: {
      flexDirection: 'row'
    },
    imgMenu: {
      margin: 15,
      width: 120,
      height: 120,
    }
});
