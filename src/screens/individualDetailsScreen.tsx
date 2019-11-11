import React from 'react';
import { Text, View, StyleSheet, Image, Button, SafeAreaView, FlatList, ScrollView } from 'react-native';
import { Tile } from '../components';
import constants from '../constants/mockData';

interface Props {
	navigation: any,
}

export default class IndividualDetailsScreen extends React.Component<Props> {
	render() {
		const title = this.props.navigation.getParam('title');
		const icon = this.props.navigation.getParam('icon');
		return (
			<View style={ styles.pageContainer }>
				<View style={ styles.tileContainer }>
					<Text> { title } </Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	pageContainer: {
		padding: 16,
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		flexDirection: 'column',
	},
	tileContainer: {
		display: 'flex',
		alignItems: "center",
		justifyContent: "center",
		flexDirection: 'row',
		flexWrap: "wrap",
	}
});

