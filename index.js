/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);


import React, {
    Component
} from 'react';
import {
    AppRegistry,
} from 'react-native';
import Login from './src/Login'

class ReactNativeWheatherAppAssignment extends Component {

    render() {
        return ( <Login/>
        );
    }
}

AppRegistry.registerComponent('ReactNativeWheatherAppAssignment', () => ReactNativeWheatherAppAssignment);