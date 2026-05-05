import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { data, useLocation, useParams } from 'react-router-dom'

function MovieCard(props) {

    let title = useParams()
    let location = useLocation()
    let [movieData, setMovieData] = useState({})
    //  setMovieData(location.state)
    // movieData = location.state

    useEffect(() => {
        if (title.name) {
            async function movieName() {
                setMovieData({})
                let { data } = await axios.get(`https://www.omdbapi.com/?apikey=61e576a4&t=${title.name}`)
                setMovieData(data)
            }
            movieName()
            console.log(title.name);
            console.log(movieData);
            
            
        }
    }, [title.name])

    return (


        <>
            <div className="container my-5">
                <div className="row">
                    <div className="card py-4 bg-dark">
                        <div className='d-flex justify-content-evenly'>
                            <img src={movieData?.Poster} alt="" className='rounded-2 my-4' />
                            <div className='col-8'>
                                <h2 className='text-white my-4'>Title: {movieData?.Title}</h2>
                                <p className='d-flex justify-content-'><span>{movieData?.Year}</span><span>{movieData?.Rated}</span><span>{movieData?.Runtime}</span></p>
                                <p className='text-white'>Genre: {movieData?.Genre}</p>
                                <p className='text-white'>Released: {movieData?.Released}</p>
                                <p className='text-white'>Director: {movieData?.Director}</p>
                                <p className='text-white'>Writer: {movieData?.Writer}</p>
                                <p className='text-white'>Actors: {movieData?.Actors}</p>
                            </div>
                        </div>
                        <div className='container d-flex flex-column justify-content-center '>
                            <h5><span className='text-white mx-5'>Plot</span></h5>
                        <span className='text-white mx-5'>{movieData?.Plot}</span>
                        </div>
                        <div className='my-3 container d-flex flex-column justify-content-center'>
                            <h5><span className='text-white mx-5 my-2'>Ratings</span></h5>
                            <div className='my-2'>
                                <span className='text-dark mx-5 bg-warning py-2 px-4 rounded-5'>IMDB: {movieData?.Ratings?.[0]?.Value}</span>
                                <span className='text-white bg-secondary py-2 px-4 rounded-5'>Votes: {movieData?.imdbVotes}</span>
                                <span className='text-white mx-5 bg-success py-2 px-4 rounded-5'>MetaScore: {movieData?.Metascore}</span>
                                <span className='text-white bg-primary py-2 px-4 rounded-5'>Internet Movie Database: {movieData?.Ratings?.[0]?.Value}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieCard
