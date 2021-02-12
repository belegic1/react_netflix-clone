import React, {useState, useEffect} from 'react'
import '../css/Banner.css'
import {netflixBanner} from '../photos/netflixBanner'
import axios from '../../axios'
import requests from '../../request'
 
const Banner = () => {
    const [movie,setmovie] = useState([])

    useEffect(()=>{
        async function fetchMovie(){
            const {data} = await axios.get(requests.fetchNetflixOriginals)
            setmovie(
                data.results[
                    Math.floor(Math.random() * data.results.length -1)
                ]
            )
        }
        fetchMovie()
    },[])

    console.log(movie);

    function truncate(string,n){
        return string?.length > n ? string.substring(0,n-1) + '...' :
        string
    }

    return (
        <header className="banner" style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }} >
            <div className="banner__contents">
                <h1 className="banner__tite">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__">
                    <button className="banner__button" > Play</button>
                    <button className="banner__button" >My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview,120)}
                </h1>
            </div>
            <div className="banner--fadeBottom"/>

        </header>
    )
}

export default Banner
