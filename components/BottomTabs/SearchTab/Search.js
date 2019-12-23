import React from 'react'
import { View, SafeAreaView, ScrollView, Text, StyleSheet, FlatList, Image } from 'react-native'
import noImage from './no-image.png'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { SearchBar } from 'react-native-elements'
import BuildConfig from 'react-native-build-config'

class SearchScreen extends React.Component {

    state = {
        search: '',
        results: []
    }

    static navigationOptions = {
        title: 'Search',
        headerStyle: {
          backgroundColor: '#181818',
          borderBottomWidth: 0,
        },
        headerTintColor: '#F2505D'
    }

    updateSearch = search => {
        const API_KEY = BuildConfig.ENV[0]
        const BASE_URL = BuildConfig.ENV[1]
        const url = `${BASE_URL}search/multi?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`

        fetch(url)
            .then(data => data.json())
            .then(data => {
                this.setState({
                    search,
                    results: data.results
                })
            })
    }

    _renderItem = ({item}) => (
        <View style={styles.itemContainer}>
            {item.poster_path ? <Image style={styles.image} source={{uri: `https://image.tmdb.org/t/p/w300/${item.poster_path}`}} /> : <Image style={styles.image} source={noImage} />}
            <View style={{display: 'flex', flexDirection: 'column', marginLeft: 20, flex: 1}}>
                {item.name ? <Text style={styles.name}>{item.name}</Text> : <Text style={styles.name}>{item.title}</Text>}
            </View>
        </View>
    )

    render() {

        const { search } = this.state

        return (
            <>
                <SafeAreaView>
                    <ScrollView style={styles.scrollView} contentInsetAdjustmentBehavior="automatic">
                        <SearchBar 
                            placeholder='Search'
                            platform='ios'
                            containerStyle={{backgroundColor: '#181818'}}
                            onChangeText={this.updateSearch}
                            value={search}
                        />
                        <View style={styles.body}>
                            <FlatList 
                                data={this.state.results}
                                renderItem={this._renderItem}
                            />
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
    },
    itemContainer: {
        height: 130,
        borderBottomColor: '#d0d0d0',
        borderBottomWidth: .3,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    name: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
        resizeMode: 'cover'
    },
})

const PeopleNavigation = createStackNavigator(
    {
        Search: SearchScreen
    }
)

const Container = createAppContainer(PeopleNavigation)

export default Container