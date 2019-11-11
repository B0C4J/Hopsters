import * as React from "react";
import { Image } from 'react-native';
import { createAppContainer,  createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { PopularScreen, FavoritesScreen, NotesScreen, IndividualDetailsScreen } from '../screens';

const PopularSwitch = createSwitchNavigator({
	Popular: PopularScreen,
	Details: IndividualDetailsScreen
})

const TabNavigator = createBottomTabNavigator({
	Popular: {
		screen: PopularSwitch,
		navigationOptions: {
			tabBarIcon: ({}) => (
				<Image style={{width: '50%', height: '50%'}} resizeMode='contain' source={require('../../assets/icons/fire.png')}/>
			),
		},
	},
	Favorites: {
		screen: FavoritesScreen,
		navigationOptions: {
			tabBarIcon: ({}) => (
				<Image style={{width: '50%', height: '50%'}} resizeMode='contain' source={require('../../assets/icons/star.png')}/>
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
});



export default createAppContainer(TabNavigator);