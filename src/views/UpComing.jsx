import React from 'react';
import { MoviesList } from '../components/MoviesList';
export const UpComing = () => {
    return(
        <MoviesList url="upcoming" page={1} />
    )
}