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

import HomeScreen from './components/BottomNavigationTabs/HomeScreen'
import Bottom from './components/BottomNavigation'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <HomeScreen />
          </View>
        </ScrollView>
        <Bottom />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#0d0d0d',
    // height: (Dimensions.get('window').height) - 200
    // marginBottom: 100
  },
  body: {
    backgroundColor: '#0d0d0d',
    color: '#0d0d0d',
  },
})

export default App;
