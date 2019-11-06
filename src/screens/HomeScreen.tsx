import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Tile } from '../components';

export default class HomeScreen extends React.Component {
	render() {
		return (
			<View style={styles.pageContainer}>
				<Tile title={'Well then... I guess this works'} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	pageContainer: {
		padding: 16,
		display: "flex",
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
});

const options = [
	{
		title: 'Hi',
	},
	{
		title: 'there',
	},
];

