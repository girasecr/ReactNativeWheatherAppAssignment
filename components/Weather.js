import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons.js';

const Weather = ({ weather, temperature }) => {
	return (
		<View style={styles.weatherContainer}>
			<View style={styles.headerContainer}>
				<Icon size={48} name="weather-sunny" color={'#fff'} />
				<Text style={styles.tempText}>{temperature}˚</Text>
			</View>
			<View style={styles.bodyContainer}>
				<Text style={styles.title}>{weather}</Text>
				<Text style={styles.subtitle}>It hurts my eyes!</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	weatherContainer: {
		flex: 1,
		backgroundColor: 'blue'
	},
	headerContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	tempText: {
		fontSize: 48,
		color: '#fff'
	},
	bodyContainer: {
		flex: 2,
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
		paddingLeft: 25,
		marginBottom: 40
	},
	title: {
		fontSize: 48,
		color: '#fff'
	},
	subtitle: {
		fontSize: 24,
		color: '#fff'
	}
});

export default Weather;