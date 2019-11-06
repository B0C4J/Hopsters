import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

const Header = () => {
	return (
		<SafeAreaView>
			<View style={styles.pageHeader}>
				<Text style={styles.pageTitle}>HOPSTERS</Text>
				<Image style={{height: 30, maxWidth: 30}} source={require('../../assets/hopsters-white-rotate.png')}/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	pageTitle: {
		color: '#FFF',
		fontSize: 20,
		fontWeight: "bold",
	},
	pageHeader: {
		backgroundColor: '#FFC300',
		paddingVertical: 24,
		paddingHorizontal: 16,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: 'space-between',
	}
});

export default Header;
