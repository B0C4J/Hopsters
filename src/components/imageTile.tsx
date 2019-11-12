import React from 'react';
import { View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { NavigationActions } from 'react-navigation';

export interface Props {
	navigation: any,
	route: string,
	data: any,
}

export default class ImageTile extends React.Component<Props> {
	constructor(props: Props) {
		super(props);
	}

	render() {
		
		const navigateAction = NavigationActions.navigate({
			routeName: this.props.route,
			
			params: {
				navigation: this.props.navigation,
				data: this.props.data,
			},
		});

		return (
			<View style={ styles.tileContainer }>
				<TouchableWithoutFeedback onPress={() => this.props.navigation.dispatch(navigateAction)}>
					<View style={ styles.tile }>
						<Image style={{width: '100%', height: '100%', marginBottom: 10}} resizeMode='center' source={ this.props.data.image }/>
					</View>
				</TouchableWithoutFeedback>
			</View>
		);
	};
}

const styles = StyleSheet.create({
	tileContainer: {
		padding: 8,
		width: '50%',
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