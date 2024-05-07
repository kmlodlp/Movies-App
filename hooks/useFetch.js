import { useEffect, useState } from "react";

export const useEffect = (url, page) => {
const apiKey ='492d218f089fd8c20e9c3a945b482a9f'
const language ='es-CO'
const urlBase ='https://api.themoviedb.org/3/movie/'
const [state, setState] = useState({
    data: null,
    isLoading: true,
    errors: null   
})
const getFetch = async () =>{
    try{
        const response = await fetch('${urlBase}${url}?api_key=${apiKey}&language=${language}&page=${page}')
        const data = await response.json()
        setState ({
            data: data,
            isLoading: false,
            errors: null
        })
}catch(errors){
    setState({
        data: null,
        isLoading:false,
        errors: errors
    })
}
}
useEffect(()=>{
    getFetch(url)
},
[
    url,
    page
])
return {
    data: state.data,
    isLoading: state.isLoading,
    errors: state.errors
}
}