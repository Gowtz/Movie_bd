import { Movies } from "../utils/types";
import MovieCard from "./MovieCard";

export default function MoviesList({movies}:{movies:Movies[]}) {
  return (
  <>
  <div className="grid justify-items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
  </div>
  </>
  )
}
