import axios from './axios';
import React, { useEffect, useState } from 'react'
import requests from './Requests';
import "./Row.css"

function Row ({title, fetchUrl, isLargeRow=false}) {
    const [movies, setMovies] = useState([]);
 
    const base_url = 'https://image.tmdb.org/t/p/original/';

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl])
    
    console.log(movies)
    
    return (
        <div className='row'>
            <h2 className='row_name'> {title}</h2>

            <div className="row_posters">
            {movies.map((movie) => (
               ( isLargeRow && movie.poster_path) ?
                 (
                    <img 
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    key={movie.id}
                    src={`${base_url}${
                         movie.poster_path
                    }`} 
                    alt={movie.name}
                    
                    />
               )
               :
               (
                <img 
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                    movie.backdrop_path 
                }`} 
                alt={movie.name}
                
                />
               )

               
            ))}
        </div>
        </div>
    )
}

export default Row
