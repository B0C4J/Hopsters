import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class NotesScreen extends React.Component {
	render() {
		return (
			<View style={ styles.pageContainer }>
				<View style={ styles.tileContainer }>
					<Text> Notes </Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	pageContainer: {
		padding: 16,
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		flexDirection: 'column',
	},
	tileContainer: {
		display: 'flex',
		alignItems: "center",
		justifyContent: "center",
		flexDirection: 'row',
		flexWrap: "wrap",
	}
});

