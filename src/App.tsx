import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Header, Navigation } from './components';

const App = () => {
	return (
		<>
			<Header />
			<Navigation />
		</>
	);
};

export default App;
