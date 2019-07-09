import React from 'react';
import {
  Navigator
} from 'react-native-deprecated-custom-components'

import ScreenPrincipal from './src/screens/screenPrincipal/screenPrincipal';
import ScreenComida1 from './src/screens/screenComida1/ScreenComida1';
import ScreenBebida1 from './src/screens/screenBebida1/ScreenBebida1';
import ScreenCombo1 from './src/screens/screenCombo1/ScreenCombo1';

export default class App extends React.Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'principal' }}
        renderScene={(route, navigator) => {

          switch(route.id){

            case 'principal':
              return(<ScreenPrincipal navigator={navigator} />);

            case 'comida1':
              return(<ScreenComida1 navigator={navigator} />);

            case 'bebida1':
              return(<ScreenBebida1 navigator={navigator} />);

            case 'combo1':
              return(<ScreenCombo1 navigator={navigator} />);

            default:
              return false;
          }

        }}
      />
    );
  }
}
