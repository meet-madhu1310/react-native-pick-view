import React from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native'

import SinglePeople from './SinglePeople'
import ListPeople from './ListPeopleScreen'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

class PeopleScreen extends React.Component {

    static navigationOptions = {
        title: 'Celebrities',
        headerStyle: {
          backgroundColor: '#181818',
          borderBottomWidth: 0,
        },
        headerTintColor: '#F2505D'
      }

    render() {
        return(
            <>
                <SafeAreaView>
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}
                    >
                        <View style={styles.body}>
                            <ListPeople navigation={this.props.navigation} />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        )
    }
}

class SinglePeopleScreen extends React.Component {

    static navigationOptions = {
        title: 'Detail',
        headerStyle: {
          backgroundColor: '#0d0d0d'
        },
        headerTintColor: '#F2505D'
      }

    render() {
        return(
            <SinglePeople />
        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#0d0d0d'
    }
})

const PeopleNavigation = createStackNavigator(
    {
        People: PeopleScreen,
        Single: SinglePeopleScreen
    }
)

const Container = createAppContainer(PeopleNavigation)

export default Container