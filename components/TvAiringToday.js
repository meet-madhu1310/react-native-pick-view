import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

class TvAiringToday extends React.Component {

    state = {
        results: []
    }

    componentDidMount = async() => {
        const API_KEY = 'API_KEY'
        const url = `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en`

        fetch(url)
            .then(data => data.json())
                .then(data => {
                    this.setState({
                        results: data.results
                    })
                })
    }

    render() {
        return(
            <>
                <View style={{borderTopWidth: .3, borderTopColor: '#d0d0d0', marginTop: 20, marginLeft: 10, marginRight: 10}}></View>
                <View style={styles.container}>
                    <Text style={styles.title}>TV Airing Today</Text>
                    <View style={styles.tvContainer}>
                        {this.state.results.slice(0, 4).map((result, index) => {
                            return(
                                <View style={styles.tvList} key={index}>
                                    <Image style={styles.tvImage} source={{ uri: `https://image.tmdb.org/t/p/w300/${result.poster_path}`}} />
                                    <View style={styles.tvDataContainer}>
                                        <Text style={styles.tvName}>{result.name}</Text>
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        paddingLeft: 10,
    },
    title: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
    },
    tvContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 5,
    },
    tvList: {
        width: 192,
        height: 155,
        marginRight: 10,
        backgroundColor: '#038C5A',
        marginBottom: 10,
        borderRadius: 10,
    },
    tvImage: {
        width: 192,
        height: 100,
        resizeMode: 'cover',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    tvDataContainer: {
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tvName: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '500',
    },
})

export default TvAiringToday