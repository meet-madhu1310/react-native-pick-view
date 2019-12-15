import { createAppContainer } from 'react-navigation'
import  { createBottomTabNavigator } from 'react-navigation-tabs'

import HomeScreen from './BottomNavigationTabs/HomeScreen'

export default createAppContainer(
    createBottomTabNavigator(
        {
            Home: HomeScreen,
            Search: HomeScreen,
            Profile: HomeScreen
        },
        {
            tabBarOptions: {
                activeTintColor: '#F2505D',
                inactiveTintColor: '#fff',
                tabStyle: {
                    backgroundColor: '#232323',
                }
            }
        }
    )
)