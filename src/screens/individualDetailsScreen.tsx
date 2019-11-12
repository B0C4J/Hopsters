import React from 'react';
import { Text, View, StyleSheet, Image, Button, SafeAreaView, FlatList, ScrollView } from 'react-native';
import { Tile } from '../components';
import constants from '../constants/mockData';

interface Props {
	navigation: any,
}

export default class IndividualDetailsScreen extends React.Component<Props> {
	render() {
		const data = this.props.navigation.getParam('data');
		return (
			<ScrollView>
				<View style={ styles.pageContainer }>
					<View style={ styles.header }>
						<Image style={{width: '50%', height: '100%', marginBottom: 10}} resizeMode='contain' source={ data.image }/>
						<View style = { styles.headerText }>
							<Text style = { styles.title }>{ data.title }</Text>
							<Text style = { styles.brewery }>{ data.brewery }</Text>
							<Text style = {styles.info } >{ data.strength } • { data.style }</Text>
						</View>
					</View>
					<View>
						<Text>{ data.description }</Text>
					</View>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	pageContainer: {
		padding: 16,
	},
	header: {
		flex: 1,
		flexDirection: 'row',
		height: 250,
		marginBottom: 30,
	},
	headerText: {
		flex: 1,
		justifyContent: 'center',
		flexDirection: 'column',
		height: '100%',
	},
	title: {
		fontSize: 24,
	},
	brewery: {
		fontSize: 16,
		marginBottom: 16,
	},
	info: {
		fontSize: 12,
	}
});

