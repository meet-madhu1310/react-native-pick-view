import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'

import BuildConfig from 'react-native-build-config'

class AllNowPlaying extends React.Component {

    state = {
        results: []
    }

    componentDidMount = async() => {

        const API_KEY = BuildConfig.ENV[0]
        const BASE_URL = BuildConfig.ENV[1]
        const url = `${BASE_URL}movie/now_playing?api_key=${API_KEY}&language=en`

        fetch(url)
            .then(data => data.json())
                .then(data => {
                    this.setState({
                        results: data.results
                    })
                })

    }

    render() {
        return (
            <>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}
                >
                    <View style={styles.container}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Recently Released</Text>
                        </View>

                        <View style={styles.list}>
                            {this.state.results.map((result, index) => {
                                return (
                                    <View style={styles.listItems} key={index}>
                                        <Image 
                                            style={styles.image} 
                                            source={{uri: `https://image.tmdb.org/t/p/w300/${result.poster_path}`}}
                                        />
                                        <Text style={styles.movieTitle}>{result.title}</Text>
                                        <Text style={styles.movieDate}>{result.release_date}</Text>
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                </ScrollView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#0d0d0d'
    },
    container: {
        // padding: 10,
    },
    title: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
    },
    titleContainer: {
        marginBottom: 20,
        padding: 10
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 10,
    },
    listItems: {
        width: 192,
        height: 350,
        borderRadius: 10,
        marginBottom: 10,
        marginRight: 10,
        backgroundColor: '#FF8000',
    },
    image: {
        width: 192,
        height: 300,
        resizeMode: 'cover',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    movieTitle: {
        color: '#fff',
        textAlign: 'center',
    }, 
    movieDate: {
        color: '#fff', 
        textAlign: 'center', 
    }
})

export default AllNowPlaying