import React from 'react'
import { View, SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

class SearchScreen extends React.Component {

    static navigationOptions = {
        title: 'Search',
        headerStyle: {
          backgroundColor: '#181818',
          borderBottomWidth: 0,
        },
        headerTintColor: '#F2505D'
    }

    render() {
        return (
            <>
                <SafeAreaView>
                    <ScrollView style={styles.scrollView} contentInsetAdjustmentBehavior="automatic">
                        <View style={styles.body}>
                            <Text style={{color: '#fff'}}>hello</Text>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#0d0d0d',
    },
    body: {
        backgroundColor: '#0d0d0d',
        padding: 10,
    }
})

const PeopleNavigation = createStackNavigator(
    {
        Search: SearchScreen
    }
)

const Container = createAppContainer(PeopleNavigation)

export default Container