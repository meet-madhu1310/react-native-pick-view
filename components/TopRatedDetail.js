import { withNavigation } from 'react-navigation'

import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

class TopRatedDetail extends React.Component {

    static navigationOptions = ({navigation}) => {
        console.log('nav: ', navigation)
        return {
            title: navigation.getParam('title')
        }
    }

    render() {
        const movieTitle = this.props.navigation.getParam('movieTitle')
        const movieImage = this.props.navigation.getParam('movieImage')
        const release_date = this.props.navigation.getParam('release_date')
        const overview = this.props.navigation.getParam('overview')
        const rating = this.props.navigation.getParam('rating')
        const totalVotes = this.props.navigation.getParam('totalVotes')

        return(
            <>
                <View style={styles.container}>
                    <Image style={styles.movieImage} source={{uri: `https://image.tmdb.org/t/p/w300/${movieImage}`}} />
                    <View style={styles.dataContainer}>
                        <Text style={styles.word}>{movieTitle}</Text>
                        <Text style={styles.date}>{release_date}</Text>
                        <Text style={styles.movieOverview}>{overview}</Text>
                        <Text style={styles.movieRating}>Ratings: {rating}</Text>
                        <Text style={styles.movieVotes}>Total Votes: {totalVotes}</Text>
                    </View>
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 10,
    },
    movieImage: {
        height: 550,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    dataContainer: {
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#181818'
    },
    word: {
        color: '#F2505D',
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 10,
    },
    date: {
        color: '#fff',
        marginBottom: 10,
    },
    movieOverview: {
        color: '#fff',
        marginBottom: 10,
    },
    movieRating: {
        color: '#fff',
        marginBottom: 10,
    },
    movieVotes: {
        color: '#fff',
    }
})

export default withNavigation(TopRatedDetail)