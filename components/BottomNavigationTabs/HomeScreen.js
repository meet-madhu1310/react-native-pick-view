import React from 'react'

import Header from '../Header'
import NowPlaying from '../NowPlaying'
import TvAiringToday from '../TvAiringToday'

class HomeScreen extends React.Component {
    render() {
        return(
            <>
                <Header />
                <NowPlaying />
                <TvAiringToday />
            </>
        )
    }
}

export default HomeScreen