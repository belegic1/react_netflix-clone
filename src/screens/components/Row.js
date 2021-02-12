import React, {useState, useEffect} from 'react'
import '../css/Row.css'
import axios from '../../axios'

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([])

    const baseUrl = "https://image.tmdb.org/t/p/original/";

    useEffect(()=>{
        async function fetchData(){
            const {data} = await axios.get(fetchUrl)
            setMovies(data.results)
            return data
        }
        fetchData()
    },[fetchUrl])
    return (
      <div className="row">
        <h2>{title}</h2>
        <div className="row__posters">
          {movies.map(
            (movie) =>
              (
                <img
                  key={movie.id}
                  className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                  src={`${baseUrl}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    );
}

export default Row
