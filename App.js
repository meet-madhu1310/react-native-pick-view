/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import 'react-native-gesture-handler'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Text
} from 'react-native';

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import {Icon} from 'react-native-elements'

// import HomeScreen from './components/BottomNavigationTabs/HomeScreen'
import Header from './components/Header'
import NowPlaying from './components/NowPlaying'
import TvAiringToday from './components/TvAiringToday'
import TopRatedDetail from './components/TopRatedDetail'
import AllNowPlaying from './components/AllNowPlaying'

//BOTTOM TABS
import PeopleScreen from './components/BottomTabs/PeopleTab/PeopleScreen'
import SearchScreen from './components/BottomTabs/SearchTab/Search'

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
    headerTintColor: '#F2505D',
    headerStyle: {
      backgroundColor: '#181818',
      borderBottomWidth: 0
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              <Header navigation={this.props.navigation} />
              <NowPlaying navigation={this.props.navigation} />
              <TvAiringToday />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
};

class TopRatedDetailScreen extends React.Component {

  static navigationOptions = {
    title: 'See Details',
    headerStyle: {
      backgroundColor: '#181818'
    },
    headerTintColor: '#F2505D'
  }

  render() {
      return(
          <>
            <SafeAreaView>
              <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
                <View style={styles.body}>
                  <TopRatedDetail />
                </View>
              </ScrollView>
            </SafeAreaView>
          </>
      )
  }
}

class AllNowPlayingScreen extends React.Component {

  static navigationOptions = {
    title: 'All Movies',
    headerStyle: {
      backgroundColor: '#181818'
    },
    headerTintColor: '#F2505D'
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            <View style={styles.body}>
              <AllNowPlaying />
            </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#0d0d0d',
  },
  body: {
    backgroundColor: '#0d0d0d',
    color: '#0d0d0d',
  },
})

const AppNavigation = createStackNavigator(
  {
    Home: HomeScreen,
    Top: TopRatedDetailScreen,
    NowAll: AllNowPlayingScreen,
  }
)

const getTabBarIcon = (navigation, tintColor) => {
  const { routeName } = navigation.state
  let iconName
  if (routeName === 'Home') {
    iconName = 'ios-home'
  } else if (routeName === 'Search') {
    iconName = 'ios-search'
  } else if (routeName === 'People') {
    iconName = 'ios-people'
  }

  return <Icon type='ionicon' name={iconName} size={25} color={tintColor} />
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: AppNavigation,
    Search: SearchScreen,
    People: PeopleScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) =>
        getTabBarIcon(navigation, tintColor)
    }),
    tabBarOptions: {
      style: {
        backgroundColor: '#181818',
        borderTopWidth: 0,
      },
      activeTintColor: '#F2505D',
      inactiveTintColor: '#fff',
    }
  }
)

const App = createAppContainer(TabNavigator)
// const AppContainer = createAppContainer(AppNavigation)

export default App
