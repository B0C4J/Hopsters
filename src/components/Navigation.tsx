import * as React from "react";
import { Image } from 'react-native';
import { createAppContainer,  createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { HomeScreen, FavoritesScreen, NotesScreen, IndividualDetailsScreen, TilesScreen } from '../screens';

const HomeSwitch = createSwitchNavigator({
	Home: HomeScreen,
	Tiles: TilesScreen,
	Details: IndividualDetailsScreen,
});

const TabNavigator = createBottomTabNavigator({
	Home: {
		screen: HomeSwitch,
		navigationOptions: {
			tabBarIcon: ({}) => (
				<Image style={{width: '50%', height: '50%'}} resizeMode='contain' source={require('../../assets/icons/home.png')}/>
			),
		},
	},
	Notes: {
		screen: NotesScreen,
		navigationOptions: {
			tabBarIcon: ({}) => (
				<Image style={{width: '50%', height: '50%'}} resizeMode='contain' source={require('../../assets/icons/writing.png')}/>
			),
		},
	},
}, {
	resetOnBlur: true,
	tabBarOptions: {
		showLabel: false,
	}
});



export default createAppContainer(TabNavigator);