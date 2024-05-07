import React from 'react';
import {MoviesList} from '../components/MoviesList'
export const NowPlaying = () =>{
    return(
        <MoviesList url="now_playing" page={1} />
    )
}