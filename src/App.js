
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from '../components/Weather';
import {API_KEY} from '../components/WeatherAPIKey';

export default class App extends React.Component {
	state = {
    isLoading: false,
    temperature: 0,
    weatherCondition: null,
	error: null
  };

  componentDidMount() {
    navigator.geolocation = require('@react-native-community/geolocation');
		navigator.geolocation.getCurrentPosition(
			position => {
				console.log("**********************************************************")
				this.fetchWeather(position.coords.latitude, position.coords.longitude);
			},
			error => {
				console.log("================+++++++++====================")
				this.setState({
					error: 'Error Getting Weather Conditions'
				});
				this.fetchWeather('18.5204', '75.8567'); //Default to Pune if not got any location
			}
		);
  }

  fetchWeather(lat = 25, lon = 25) {
		fetch(
			`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metri`
		)
			.then(res => res.json())
			.then(json => {
				this.setState({
					temperature: json.main.temp,
					weatherCondition: json.weather[0].main,
					isLoading: false
				});
			});
	}

	render() {
    const { isLoading } = this.state;
		return (
			<View style={styles.container}>
				{isLoading ? <Text>Fetching The Weather</Text> : <Weather weather={this.state.weatherCondition} temperature={this.state.temperature}
/>}
		<View style={styles.bottomView}>
          <Text style={styles.textStyle}>Swipe to open menus>></Text>
        </View>
		</View>
		);
}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	},
  bottomView: {
    width: '100%',
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    position: 'absolute',
    top:30,
  },
   textStyle: {
     left:20,
     color: '#fff',
     fontSize: 18,
   },
});