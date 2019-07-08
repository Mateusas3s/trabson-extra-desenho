import React from 'react';
import { 
    View,
    StatusBar,
} from 'react-native';

import BarraNavegacao from '../../barNavigation/BarraNavegacao';
import Comida1 from '../../snacks/comida1/Comida1';

export default class ScreenComida1 extends React.Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor= '#ccc' />

        <BarraNavegacao voltar navigator={this.props.navigator} />
       
        <Comida1 />
        
      </View>
    );
  }
}

