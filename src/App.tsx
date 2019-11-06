/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
	return (
		<>
		<StatusBar barStyle="dark-content" />
		<SafeAreaView>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic">
				<View>
					<Text style={styles.pageTitle}>HOPSTERS</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
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
