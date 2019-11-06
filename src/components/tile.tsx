import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export interface Props {
	title: string,
}

export default class Tile extends React.Component<Props> {
	constructor(props: Props) {
		super(props);
	}
	render() {
		return (
			<View style={ styles.tileContainer }>
				<View style={ styles.tile }>
					<Text style={{ color: '#fff' }}>{ this.props.title }</Text>
				</View>
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
		backgroundColor: '#000',
		height: '100%',
	}
});