import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Header from './Header';
import Navigation from './Navigation';

const App = () => {
	return (
		<>
			<Header />
			<Navigation />
		</>
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

export default App;
