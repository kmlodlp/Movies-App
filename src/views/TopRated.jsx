import React from 'react';
import {MoviesList} from '../components/MoviesList'
export const TopRated =() =>{
    return(
        <MoviesList url="top_rated" page= {1} />
    )
}