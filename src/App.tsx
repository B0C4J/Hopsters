import React from 'react';


import { Header, Navigation } from './components';
import firebase from 'react-native-firebase';


const App = () => {
	// var Hopsters = firebase.initializeApp({
	// 	apiKey: "AIzaSyBxx9FU48R38wY2wkYoydMXhSCDGZw4dFA",
	// 	databaseURL: "https://hopsters-gerringong.firebaseio.com",
	// 	projectId: "hopsters-gerringong",
	// 	storageBucket: "hopsters-gerringong.appspot.com",
	// 	appId: "1:609035491418:web:6331e427499cc1e928a063",
	// 	messagingSenderId: "609035491418",
	//   }, "Hopsters");
	return (
		<>
			<Header />
			<Navigation />
		</>
	);
};

export default App;
