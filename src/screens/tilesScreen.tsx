import React from 'react';
import { View, StyleSheet, FlatList, AsyncStorage, ScrollView } from 'react-native';
import { ImageTile } from '../components';

interface Props {
	navigation: any,
}

export default class TilesScreen extends React.Component<Props> {
	render() {
		let data: Array<{ key: any, title: string, icon: any }> = this.props.navigation.getParam('data');
		console.log(data);
		if (data === 'recent') {
			console.log('hi');
			let recent;
			const getUserId = async () => {
				let userId = {};
				try {
				userId = await AsyncStorage.getItem('Recent') || [];
				} catch (error) {
				// Error retrieving data
				console.log(error.message);
				}
				console.log(userId);
				return userId;
			}
			getUserId().then((recent) => {
				return (
					<FlatList
						style = { styles.pageContainer }
						data = { JSON.parse(recent) }
						keyExtractor = { item => item.key }
						numColumns={ 2 }
						renderItem={({ item }) => <ImageTile navigation={ this.props.navigation } route="Details" data={ item } />}
					/>
				);
			});
		} else {
			return (
				<FlatList
					style = { styles.pageContainer }
					data = { data }
					keyExtractor = { item => item.key }
					numColumns={ 2 }
					renderItem={({ item }) => <ImageTile navigation={ this.props.navigation } route="Details" data={ item } />}
				/>
			);
		};
	}
}

const styles = StyleSheet.create({
	pageContainer: {
		padding: 16,
		width: '100%',
		display: "flex",
	},
});

