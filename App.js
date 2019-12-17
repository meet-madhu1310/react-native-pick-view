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
  Dimensions
} from 'react-native';

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

// import HomeScreen from './components/BottomNavigationTabs/HomeScreen'
import Header from './components/Header'
import NowPlaying from './components/NowPlaying'
import TvAiringToday from './components/TvAiringToday'
import TopRatedDetail from './components/TopRatedDetail'
import AllNowPlaying from './components/AllNowPlaying'

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
    headerTintColor: '#F2505D',
    headerStyle: {
      backgroundColor: '#0d0d0d'
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20
    }
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
      backgroundColor: '#0d0d0d'
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
      backgroundColor: '#0d0d0d'
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
  },
)
const AppContainer = createAppContainer(AppNavigation)

export default AppContainer
