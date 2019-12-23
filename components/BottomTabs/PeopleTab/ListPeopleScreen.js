import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native'

import BuildConfig from 'react-native-build-config'

class ListOfPeople extends React.Component {

    state = {
        results: []
    }

    componentDidMount = async() => {
        const API_KEY = BuildConfig.ENV[0]
        const BASE_URL = BuildConfig.ENV[1]
        const url = `${BASE_URL}person/popular?api_key=${API_KEY}&language=en-US&page=1`

        fetch(url)
            .then(data => data.json())
                .then(data => {
                    this.setState({
                        results: data.results
                    })
                })
    }

    navToSingle = (e) => {
        try {
            this.props.navigation.navigate('Single', {
                name: e.name,
                image: e.profile_path,
                known_for: e.known_for,
                id: e.id
            })
        } catch(err) {
            console.log('Error: ', err)
        }
    }

    _renderItem = ({item}) => (
        <TouchableOpacity onPress={() => this.navToSingle(item)}>
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: `https://image.tmdb.org/t/p/w300/${item.profile_path}`}} />
            <View style={{display: 'flex', flexDirection: 'column', marginLeft: 20, flex: 1}}>
                <Text style={styles.name}>{item.name}</Text>
                {item.gender === 1 ? <Text style={{color: '#fff', marginTop: 7, fontSize: 15}}>Actress</Text> : <Text style={{color: '#fff', marginTop: 7, fontSize: 15}}>Actor</Text>}
                <Text style={styles.knownFor}>{item.known_for[0].title}, {item.known_for[1].title}</Text>
            </View>
        </View>
        </TouchableOpacity>
    )

    render() {
        return (
            <>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}
                >
                    <View style={styles.body}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Most Popular Celebrities</Text>
                        </View>

                        <View style={styles.list}>
                            <FlatList 
                                data={this.state.results}
                                renderItem={this._renderItem}
                            />
                        </View>
                    </View>
                </ScrollView>
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
    titleContainer: {
        marginBottom: 10
    },
    title: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
    },
    container: {
        height: 130,
        borderBottomColor: '#d0d0d0',
        borderBottomWidth: .3,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
        resizeMode: 'cover'
    },
    name: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    popularity: {
        color: '#d0d0d0',
        marginTop: 7,
    },
    knownFor: {
        color: '#d0d0d0',
        margin: 0,
    }
})

export default ListOfPeople