import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { HomeScreen, SettingsScreen } from '../screens';

const TabNavigator = createBottomTabNavigator({
	Home: HomeScreen,
	Settings: SettingsScreen,
});

export default createAppContainer(TabNavigator);