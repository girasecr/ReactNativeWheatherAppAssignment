import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

import { DrawerNavigator} from 'react-navigation';
import App from './App'
import ProfileScreen from './ProfileScreen'
import Icon from 'react-native-vector-icons/Octicons';

const MenuIcon = ({ navigate }) => <Icon
    name='three-bars'
    size={30}
    color='red'
    onPress={() => navigate('DrawerOpen')}
/>;

const WeatherApp = DrawerNavigator({
    Home: {
        screen: App,
        navigationOptions: ({ navigation }) => ({
            headerRight: MenuIcon(navigation)
        })
    },
    ProfileScreen: {
        screen: ProfileScreen,
        navigationOptions: ({ navigation }) => ({
            headerRight: MenuIcon(navigation)
        })
    }
});

export default class Login extends React.Component {

  state = {
    country: '',
    states: '',
    city: '',
    isLoggedIn: false,
  };

  onClickListener = (viewId) => {
    this.setState({ isLoggedIn: true });
  }

  render() {
    if (this.state.isLoggedIn === true) {
      return <WeatherApp/>
    }
    else {
      return ( <View style = {styles.container}>
      <View style = {styles.inputContainer}>
      <TextInput style = { styles.inputs } placeholder = "Country" keyboardType = "email-address" underlineColorAndroid = 'transparent'
      onChangeText = { (country) =>
      this.setState({ country })}/>
      </View>
      <View style = {styles.inputContainer}>
      <TextInput style = { styles.inputs } placeholder = "State" keyboardType = "email-address" underlineColorAndroid = 'transparent'
      onChangeText = { (states) =>
      this.setState({ states })}/>
      </View>
      <View style = {styles.inputContainer}>
      <TextInput style = { styles.inputs } placeholder = "City" keyboardType = "email-address" underlineColorAndroid = 'transparent'
      onChangeText = { (city) =>
      this.setState({ city })}/>
      </View>
      <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('Submit')}>
          <Text style={styles.loginText}>Submit</Text>
      </TouchableHighlight>
      </View>
    );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});