import React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, FlatList, ScrollView } from 'react-native';
import { Tile } from '../components';
import constants from '../constants/mockData';

interface Props {
	navigation: any,
}

export default class PopularScreen extends React.Component<Props> {
	render() {
		console.log(constants.options);
		return (
			<View style={ styles.pageContainer }>
				<View style={ styles.tileContainer }>
					<FlatList
						data = { constants.options }
						keyExtractor = { item => item.key }
						renderItem={({ item }) =>  <Tile title={ item.title } icon={ item.icon } navigation={ this.props.navigation } />}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	pageContainer: {
		padding: 16,
		flex: 1,
		justifyContent: "center",
		flexDirection: 'column',
	},
	tileContainer: {
		display: 'flex',
		justifyContent: "center",
		width: '100%',
	}
});

