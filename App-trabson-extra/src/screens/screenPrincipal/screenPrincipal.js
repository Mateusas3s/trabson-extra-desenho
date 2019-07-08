import React from 'react';
import { 
    StyleSheet,
    View,
    StatusBar,
    Image,
    TouchableHighlight
} from 'react-native';

import BarraNavegacao from '../../barNavigation/BarraNavegacao';

//const logo = require('../../assets/logo.png')
const imgComida1 = require('../../../assets/comida1.jpeg');
const imgComida2 = require('../../../assets/comida2.jpeg');

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
                this.props.navigator.push({ id: 'comida2' })
              }}
            >
              <Image style={styles.imgMenu} source={imgComida2} />
            </TouchableHighlight>

          </View>

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
