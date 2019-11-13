import React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, FlatList, ScrollView } from 'react-native';
import { Tile } from '../components';
import constants from '../constants/mockData';

interface Props {
	navigation: any,
}

export default class HomeScreen extends React.Component<Props> {
	render() {
		return (
			<FlatList
				style = { styles.pageContainer }
				data = { constants.options }
				keyExtractor = { item => item.key }
				renderItem={({ item }) => <Tile title={ item.title } icon={ item.icon } navigation={ this.props.navigation } route="Tiles" data={ item.data }/>}
			/>
		);
	}
}

const styles = StyleSheet.create({
	pageContainer: {
		padding: 16,
	},
});

