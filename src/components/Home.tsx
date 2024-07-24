import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import MovieCard from './MovieCard';

const Home = () => {
  const [movieList, setMovieList] = useState<any[]>([]);

  const shimmerArray = Array(18).fill(null);

  const getMovieData = async (): Promise<void> => {
    try {
      const data = await fetch('http://localhost:8080/api/v1/movie/');
      const movieData = await data.json();
      setMovieList(movieData?.data);
      console.log('movieData', movieData.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);
  return (
    <>
      {movieList.length === 0 ? (
        <div className="flex flex-wrap">
          {shimmerArray.map((el, idx) => (
            <Shimmer key={idx} />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-5 mx-8">
          {movieList.map((movie: any) => (
            <MovieCard
              key={movie?.id}
              poster={movie?.poster_path}
              title={movie?.title}
              ratings={movie?.ratings}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
