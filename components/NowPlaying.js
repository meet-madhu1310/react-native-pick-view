import React from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'

class NowPlaying extends React.Component {

    state = {
        results: []
    }

    componentDidMount = async() => {

        const API_KEY = '8367b1854dccedcfc9001204de735470'
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en`

        fetch(url)
            .then(data => data.json())
                .then(data => {
                    this.setState({
                        results: data.results
                    })
                })

    }

    _renderItem = ({item}) => (
        <View style={styles.movieContainer}>
            <Image style={styles.movieImage} source={{uri: `https://image.tmdb.org/t/p/w300/${item.poster_path}`}} />
            <Text style={styles.movieName}>{item.title}</Text>
        </View>
    )

    navToAll = (e) => {
        try {
            this.props.navigation.navigate('NowAll')
        } catch(err) {
            console.log('err: ', err)
        }
    }

    render() {
        return(
            <>
                <View style={styles.textHeaderView}>
                    <Text style={styles.textHeader}>Now Playing</Text>
                    <Text onPress={() => this.navToAll(this.state.results)} style={styles.subHeadLine}>See all</Text>
                </View>

                <View style={styles.moviesList}>
                    <FlatList
                        horizontal={true}
                        data={this.state.results.slice(0, 10)}
                        renderItem={this._renderItem}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    textHeaderView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: .3,
        borderTopColor: '#d0d0d0',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },  
    textHeader: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 10
    },
    subHeadLine: {
        color: '#F2505D',
        paddingTop: 10,
        alignSelf: 'flex-end',
        fontWeight: '600',
        fontSize: 17
    },
    moviesList: {
        padding: 10,
        flex: 1
    },
    movieContainer: {
        width: 180,
        marginRight: 10,
        backgroundColor: '#FF8000',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 10
    },
    movieImage: {
        width: 180,
        height: 220,
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    movieName: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'center'
    }
})

export default NowPlaying