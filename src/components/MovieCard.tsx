import { POSTER_URL } from '../config';
interface Props {
  poster: string;
  title: string;
  ratings: number;
}

const MovieCard = ({ poster, title, ratings }: Props) => {
  console.log('props', poster, title, ratings);
  console.log('posterUrl', `POSTER_URL${poster}`);
  return (
    <div>
      <img src={`${POSTER_URL}${poster}`} alt="movie-post" className="w-52" />
      <div>
        <h1>{title}</h1>
        <span>{ratings}</span>
      </div>
    </div>
  );
};

export default MovieCard;
