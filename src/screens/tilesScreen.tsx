import React from 'react';
import { View, Text, StyleSheet, FlatList, AsyncStorage } from 'react-native';
import { ImageTile } from '../components';

interface Props {
	navigation: any,
}

interface payloadData {
	key: string,
	data: Array<any>,
}

export default class TilesScreen extends React.Component<Props> {
	state = {
		isLoading: true,
		value: '',
	};

	componentDidMount() {
		AsyncStorage.getItem('Recent').then((recent: any) => {
			this.setState({
				isLoading: false,
				value: JSON.parse(recent)
			});
		});
	};

	render() {
		const dataObject: payloadData = this.props.navigation.getParam('dataObject');
		let data: Array<any> = dataObject.data;

		if (this.state.isLoading && dataObject.key === '01') {
			return <View><Text>Loading...</Text></View>;
		}
		if (dataObject.key === '01') {
			data = data.filter(item => this.state.value.includes(item.id));
		}
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

