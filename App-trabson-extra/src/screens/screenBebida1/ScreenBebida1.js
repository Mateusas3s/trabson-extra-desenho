import React from 'react';
import { 
    View,
    StatusBar,
    ScrollView,
} from 'react-native';

import BarraNavegacao from '../../barNavigation/BarraNavegacao';
import Bebida1 from '../../snacks/bebida1/Bebida1';

export default class ScreenBebida1 extends React.Component {
  render() {
    return (
        <ScrollView>
            <View>
              <StatusBar backgroundColor= '#ccc' />
            
              <BarraNavegacao voltar navigator={this.props.navigator} />
            
              <Bebida1 />
              
            </View>
        </ScrollView>

    );
  }
}

