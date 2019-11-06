import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const Header = () => {
	return (
		<SafeAreaView>
			<View>
				<Text style={styles.pageTitle}>HOPSTERS</Text>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	pageTitle: {
		backgroundColor: '#FFC300',
		color: '#FFF',
		fontSize: 20,
		fontWeight: "bold",
		paddingVertical: 24,
		paddingHorizontal: 8,
	}
});

export default Header;
