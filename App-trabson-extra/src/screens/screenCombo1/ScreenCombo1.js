import React from 'react';
import { 
    ScrollView,
    StatusBar,
} from 'react-native';
import Bebida1 from '../../snacks/bebida1/Bebida1';
import Comida1 from '../../snacks/comida1/Comida1';
import BuyButton from '../../components/buyButton';

import BarraNavegacao from '../../barNavigation/BarraNavegacao';

export default class ScreenCombo1 extends React.Component {
  render() {
    return (
      <ScrollView>
        <StatusBar backgroundColor= '#ccc' />
        <BarraNavegacao voltar navigator={this.props.navigator} />
        <Bebida1/>
        <Comida1/>
        <BuyButton></BuyButton>
      </ScrollView>
    );
  }
}


