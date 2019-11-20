import React from 'react';
import { Text, View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { NavigationActions } from 'react-navigation';

export interface Props {
	title: string,
	icon: any,
	navigation: any,
	route: string,
	dataObject: any,
}

export default class Tile extends React.Component<Props> {
	constructor(props: Props) {
		super(props);
	}

	render() {
		
		const navigateAction = NavigationActions.navigate({
			routeName: this.props.route,
			
			params: {
				title: this.props.title,
				icon: this.props.icon,
				navigation: this.props.navigation,
				dataObject: this.props.dataObject,
			},
		});

		return (
			<View style={ styles.tileContainer }>
				<TouchableWithoutFeedback onPress={() => this.props.navigation.dispatch(navigateAction)}>
					<View style={ styles.tile }>
						<Image style={{width: '50%', height: '50%', marginBottom: 10}} resizeMode='contain' source={ this.props.icon }/>
						<Text style={{ color: '#fff' }}>{ this.props.title }</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
		);
	};
}

const styles = StyleSheet.create({
	tileContainer: {
		padding: 8,
		width: '100%',
		height: 150,
		flexShrink: 0,
	},
	tile: {
		backgroundColor: '#eee',
		height: '100%',
		borderRadius: 5,
		padding: 8,
		display: 'flex',
		justifyContent: "center",
		alignItems: "center",
	}
});