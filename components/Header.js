import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'

class Header extends React.Component {

    state = {
        results: []
    }

    componentDidMount = async() => {
        
        const API_KEY = '8367b1854dccedcfc9001204de735470'
        const n = Math.floor(Math.random() * 10)

        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${n}`

        fetch(url)
            .then(data => data.json())
                .then(data => {
                    this.setState({
                        results: data.results
                    })
                })

    }

    navToDetail = (e) => {
        try {
            this.props.navigation.navigate('Top', {
                title: e.title,
                movieTitle: e.title,
                movieImage: e.poster_path,
                overview: e.overview,
                release_date: e.release_date,
                rating: e.vote_average,
                totalVotes: e.vote_count
            })   
        } catch(err) {
            console.log('err: ', err)
        }
    }

    render() {
        return (
            <>
                <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold', paddingLeft: 10, paddingTop: 10}}>Top Rated</Text>
                <View style={styles.headerMovieData}>
                    {this.state.results.slice(0, 1).map((result, i) => {
                        return(
                            <View key={i}>
                                <Image style={styles.movieImage} source={{uri: `https://image.tmdb.org/t/p/w300/${result.poster_path}`}} />
                                <View style={styles.movieData}>
                                    <Text style={styles.movieTitle}>{result.title}</Text>
                                    <Text style={styles.movieDate}>{result.release_date}</Text>
                                    <View style={{backgroundColor: '#0d0d0d', width: 120, borderRadius: 50, alignSelf: 'flex-end', marginTop: -43, paddingLeft: 5, paddingRight: 5}}>
                                        <Button 
                                            color='#fff'
                                            title='View More'
                                            onPress={() => this.navToDetail(result)}
                                        />
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    headerMovieData: {
        backgroundColor: '#F2505D',
        margin: 10,
        marginTop: 5,
        borderRadius: 10,
    },
    movieData: {
        padding: 20,
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
    },  
    movieTitle: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'left',
        fontWeight: '700',
        alignSelf: 'flex-start',
    },
    movieDate: {
        color: '#fff',
        marginTop: 3,
        fontSize: 15,
        alignSelf: 'flex-start',
    },  
    movieImage: {
        width: '100%',
        height: 400,
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    }
})

export default Header