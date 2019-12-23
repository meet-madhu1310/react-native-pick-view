import { withNavigation } from 'react-navigation'

import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'

import BuildConfig from 'react-native-build-config'

class SinglePeople extends React.Component {

    state = {
        birthday: '',
        place_of_birth: ''
    }

    componentDidMount = async() => {
        const API_KEY = BuildConfig.ENV[0]
        const BASE_URL = BuildConfig.ENV[1]
        const id = this.props.navigation.getParam('id')
        const url = `${BASE_URL}person/${id}?api_key=${API_KEY}&language=en-US`

        fetch(url)
            .then(data => data.json())
                .then(data => {
                    this.setState({
                        birthday: data.birthday,
                        place_of_birth: data.place_of_birth
                    })
                })
    }
    
    render() {

        const name = this.props.navigation.getParam('name')
        const image = this.props.navigation.getParam('image')
        const known_for = this.props.navigation.getParam('known_for')

        return (
            <>
                <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                    <View style={styles.body}>
                        <Image style={styles.image} source={{uri: `https://image.tmdb.org/t/p/w300/${image}`}} />
                        <View style={styles.textContainer}>
                            <Text style={styles.name}>{name}</Text>
                            <Text style={styles.birthday}>
                                <Text style={{fontWeight: 'bold', fontSize: 17}}>Birthday: </Text>
                                {this.state.birthday}
                            </Text>
                            <Text style={styles.birthPlace}>
                                <Text style={{fontWeight: 'bold', fontSize: 17}}>Birth Place: </Text>
                                {this.state.place_of_birth}
                            </Text>
                            <Text style={{marginLeft: 10, marginTop: 5, fontSize: 25, color:'#fff', fontWeight: 'bold'}}>Famous for:</Text>
                            <View style={styles.known}>
                                {known_for.map((movie, index) => {
                                    return (
                                        <View 
                                            key={index} 
                                            style={styles.knownContainer}
                                        >
                                            <Image style={styles.movieImage} source={{uri: `https://image.tmdb.org/t/p/w300/${movie.poster_path}`}} />
                                            <Text style={styles.movieName}>{movie.title}</Text>
                                            <Text style={styles.date}>{movie.release_date}</Text>
                                        </View>
                                    )
                                })}
                            </View>
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
    body: {
        backgroundColor: '#0d0d0d',
        padding: 10
    },
    textContainer: {
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#181818',
    },
    name: {
        color: '#F2505D',
        fontSize: 25,
        textAlign: 'center',
    },
    image: {
        height: 400,
        resizeMode: 'cover',
        borderRadius: 10
    },
    birthday: {
        color: '#fff',
        fontSize: 15,
        marginTop: 5,
        marginLeft: 10,
    },
    birthPlace: {
        color: '#fff',
        fontSize: 15,
        marginTop: 5,
        marginLeft: 10,
    },
    known: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
        marginLeft: 10,
    },
    knownContainer: {
        height: 250,
        width: 182,
        marginBottom: 10,
        marginRight: 10,
        backgroundColor: '#F2505D',
        borderRadius: 10,
        flexGrow: 1
    },
    movieName: {
        color: '#fff',
        textAlign: 'left',
        marginTop: 10,
        fontSize: 15,
        marginLeft: 5,
        fontWeight: 'bold',
    },
    movieImage: {
        height: 180,
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    date: {
        marginLeft: 5,
        color: '#fff',
        marginTop: 3,
    }
})

export default withNavigation(SinglePeople)