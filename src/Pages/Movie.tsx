import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movie } from "../utils/types";
import axios from "axios";
export default function Movie() {
  const { id } = useParams();
  const [error, setError] = useState("");
  const [movie, setMovie] = useState<movie>();
  const options = {
    method: "GET",
    url: `https://imdb-top-100-movies.p.rapidapi.com/${id}`,
    headers: {
      "x-rapidapi-key": `${import.meta.env.VITE_API}`,
      "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };
  useEffect(()=>{
  const getMovie = async ()=>{
      await axios.request(options).then(res=> setMovie(res.data) ).catch(()=>setError("No Movies Found"))
  }
  getMovie()
  },[])
  if (error) {
    return (
      <>
        <h1 className="text-center text-5xl mt-10 font-bold jc">{error}</h1>
      </>
    );
  }

  return (
    <>
      <div>
        <div className="home min-h-[calc(100vh-10rem)] flex flex-col w-full px-5 my-10 items-center lg:flex-row lg:justify-center lg:gap-32">
          <img
            src={movie?.big_image}
            alt="Bigimage"
            className="rounded-xl text-center lg:h-[75vh] lg:max-w-3/6"
          />
          <div className="flex flex-col gap-5  justify-start mt-5 max-w-[575px] lg:w-3/6 ">
            <h1 className="font-bold text-5xl">{movie?.title}</h1>
            <div className="rating">
              <h3 className="flex items-center justify-between pr-5">
                <span className="subheading">Rating</span>{" "}
                <div className="star text-red-600">
                <i className="bx bx-star"></i>
                {movie?.rating}
                </div>

              </h3>
            </div>
            <div className="Geners flex items-center">
              <h3 className="subheading">Geners</h3>
              <ul className="flex flex-wrap gap-2">
                {movie?.genre.map((gen, index) => (
                  <li key={index} className="py-2 px-4 rounded bg-slate-200">
                    {gen}
                  </li>
                ))}
              </ul>
            </div>
            <div className="release flex items-center">
              <h3 className="subheading">Release Year</h3> {movie?.year}
            </div>
            <div className="description">
              <h3 className="subheading">Description</h3>
              <p className="text-2xl">{movie?.description}</p>
            </div>
            <div className="director flex items-center">
              <h3 className="subheading">Directer</h3>
              <span className="font-bold text-xl">
                {movie?.director.map((dir, index) => (
                  <span key={index}>{dir}</span>
                ))}
              </span>
            </div>
            <div className="trailer flex flex-col items-center">
              <h3 className="subheading mb-2">Watch Trailer here</h3>
              <iframe

                className="w-[350px] h-[200px] lg:h-[280px] lg:w-[500px] rounded"
                src={movie?.trailer_embed_link}
                title="The Great Software Reset: How Micro-Entrepreneurs Will Dominate SaaS"
                //@ts-ignore  
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="writers">
            <h3 className="subheading">Writers</h3>
              <span className="font-bold text-xl">
                {movie?.writers.map((dir, index) => (
                  <span key={index}>{dir}, </span>
                ))}
                </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
