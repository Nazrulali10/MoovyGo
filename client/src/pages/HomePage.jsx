import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { useAppContext } from "../context/AppContext";
import CardSkeleton, { BannerSkeleton } from "../components/CardSkeleton";
import Slider from "../components/Slider";

const HomePage = () => {
  const { searchQuery, movies, homeLoading, setHomeLoading } = useAppContext();
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setFilteredMovies(
        movies.filter((movie) =>
          movie.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredMovies(movies);
    }
  }, [searchQuery, movies]);

  return (
    <div className="w-full h-auto md:px-15 ">
      {!homeLoading ? (
        <div className="px-2">
          {searchQuery.length>0?null: <Slider />}
        </div>
      ) : <BannerSkeleton/>}

      <div className="flex w-full justify-center items-center mt-10 md:mt-20 px-4">
        <div className="flex flex-col mb-8 ">
          <div className="text-xl md:text-3xl font-bold dark:text-white text-black">
            Book Tickets Now
            <div className="w-full h-0.5 rounded-full bg-red-500 mt-1 md:mt-2"></div>
          </div>
        </div>
      </div>

      <div>
        {!homeLoading ? (
          <div className="md:px-15 px-5 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 md:mt-3 mt-0">
            {filteredMovies.map((movie, i) => (
              <MovieCard key={i} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="md:px-15 px-4 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10">
            {[...Array(8)].map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default HomePage;
