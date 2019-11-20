import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, AsyncStorage } from 'react-native';

interface Props {
	navigation: any,
}

export default class IndividualDetailsScreen extends React.Component<Props> {
	render() {
		const data: any = this.props.navigation.getParam('data');

		setRecentlyViewed(data.id);
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

const setRecentlyViewed = async (id: number) => {
	let tempArray = [id];

	try {
		AsyncStorage.getItem('Recent').then( async (value: any) => {
			let recent = new Set(JSON.parse( value ));

			if (recent.size === 0){
				await AsyncStorage.setItem('Recent', JSON.stringify( tempArray ));
			}
			else if(recent.has(id)) {
				recent.delete(id);
				recent.add(id);
				await AsyncStorage.setItem('Recent', JSON.stringify( Array.from(recent) ));

			}
			else {
				recent.add(id);
				await AsyncStorage.setItem('Recent', JSON.stringify( Array.from(recent) ));
			}
		});
	} finally {}
};

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

