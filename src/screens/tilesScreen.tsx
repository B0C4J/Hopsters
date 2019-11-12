import React from 'react';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { ImageTile } from '../components';

interface Props {
	navigation: any,
}

export default class TilesScreen extends React.Component<Props> {
	render() {
		const data: Array<{ key: any, title: string, icon: any }> = this.props.navigation.getParam('data');
		return (
			<FlatList
				style = { styles.pageContainer }
				data = { data }
				keyExtractor = { item => item.key }
				numColumns={ 2 }
				renderItem={({ item }) => <ImageTile navigation={ this.props.navigation } route="Details" data={ item } />}
			/>
		);
	}
}

const styles = StyleSheet.create({
	pageContainer: {
		padding: 16,
		width: '100%',
		display: "flex",
	},
});

