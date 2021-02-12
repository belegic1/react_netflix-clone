import React from 'react'
import requests from '../request'
import Banner from './components/Banner'
import Nav from './components/Nav'
import Row from './components/Row'
import './css/HomeScreen.css'

const HomeScreen = () => {
    return (
        <div className="homeScreen">
           <Nav />
           <Banner />
           <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLatgeRow />
           <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
           <Row title="Top Rated" fetchUrl={requests.fetchTopRaten}  />
           <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}  />
           <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}  />
           <Row title="Horror Movies" fetchUrl={requests.fetchComedyMovies}  />
           <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}  />
           <Row title="Documentaryes" fetchUrl={requests.fetchDocumentaries}  />
        </div>
    )
}

export default HomeScreen
