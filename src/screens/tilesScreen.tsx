import React from 'react';
import { View, Text, StyleSheet, FlatList, AsyncStorage } from 'react-native';
import { ImageTile } from '../components';

interface Props {
	navigation: any,
}

export default class TilesScreen extends React.Component<Props> {
	state = {
		isLoading: true,
		value: '',
	};

	componentDidMount() {
		AsyncStorage.getItem('Recent').then((recent: any) => {
			this.setState({
				isLoading: false
			});
			this.setState({ value: JSON.parse(recent) });
		});
	};

	render() {
		let data: any = this.props.navigation.getParam('data');

		if (this.state.isLoading && data === 'recent') {
			return <View><Text>Loading...</Text></View>;
		}
		if (data === 'recent') {
			data = this.state.value;
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

