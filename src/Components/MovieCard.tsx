import { Movies } from "../utils/types";

export default function MovieCard({ movie }: { movie: Movies }) {
  return (
    <>
    <a href={`/movie/${movie.id}`}>

 
      <div className="card my-5 max-w-[300px]">
        <img src={movie.image} alt={movie.title} className="rounded-md" />
        <div className="pt-3">
          <h1 className="text-2xl font-semibold ">{movie.title}</h1>
          <div className="flex pt-2">
           <h2 className="text-blue-700 font-semibold pr-5">Rating</h2>
            <div className="flex items-center text-yellow-700">
            <i className="bx bx-star"></i>
            {movie.rating}
          </div>
          </div>

        </div>
        <div className="subheading">
            <h2><span className="text-blue-700 font-semibold pr-5">Released year</span>{movie.year} </h2>
        </div>
      </div>
      </a>
    </>
  );
}
