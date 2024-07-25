import { useEffect, useState } from "react";
import MoviesList from "../Components/MoviesList";
// import SearchBar from "../Components/SearchBar";

import axios from 'axios'
import { Movies } from "../utils/types";
export default function SearchPage() {
  
  const [error,setError]=useState("");
  // @ts-ignore
  const [movies,setMovies] = useState<Movies[]>([])
  
  const options = {
    method: 'GET',
    url: 'https://imdb-top-100-movies.p.rapidapi.com/',
    headers: {
      'x-rapidapi-key': `${import.meta.env.VITE_API}`,
      'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  };
  useEffect(()=>{
    const getMovies =async()=>{
      await axios.request(options).then(res => setMovies(res.data)).catch((err)=>setError("Sorry The API Limit is Reached"+err))
    }
    getMovies()
  },[])
if(error){
  return <><h1 className='text-center text-5xl mt-10 font-bold'>{error}</h1></>
}
  return (
    <>
      <div className="container px-2 mx-auto font-sans mt-10">
        {/* <SearchBar /> */}
        <MoviesList movies={movies}/>
      </div>
    </>
  );
}
