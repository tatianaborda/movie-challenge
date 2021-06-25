import React, { useState, useEffect} from 'react';
import { Movie } from './Movie'
import './MainMovies.css';
import { NavBar } from './NavBar'


export const MainMovies = () => {
    const [movies, setMovies] = useState([])
    const [moviesByYear, setMoviesByYear] = useState('')

    const getMovies = async () => {
        const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3504a963b5eddb74923319a7e1dab880`
        const data = await fetch(API_URL)
        const dataJson = await data.json()
        setMovies(dataJson.results)
    }

    useEffect(() => {
		getMovies();
	}, []);

    const getMoviesByYear = async () => {
        const SEARCH_BY_YEAR = `https://api.themoviedb.org/3/discover/movie?primary_release_year=${moviesByYear}&sort_by=vote_average.desc&api_key=3504a963b5eddb74923319a7e1dab880`
        const data = await fetch(SEARCH_BY_YEAR)
        const dataJson = await data.json()
        setMovies(dataJson.results)
        console.log(dataJson)
    }

    useEffect(() => {
        if(moviesByYear){
		getMoviesByYear(moviesByYear);
    }}, [moviesByYear]);

    return (
        <div>     
            <NavBar moviesByYear={moviesByYear} setMoviesByYear={setMoviesByYear}/>   
            <div className="cards-container">
                {movies.length > 0 && movies.map( movie => (
                    <Movie
                    key= {movie.id}
                     {...movie}/>
                ))}
            </div>
        </div>
    );
}