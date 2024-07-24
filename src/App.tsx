import { NETFLIX_START_BACKGROUND } from './config';
import './App.css';
import NavigateRouter from './components/Router';
import { Provider } from 'react-redux';
import { store } from './utils/store';

function App() {
    T//MDB_URL=https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=a82a2b5e656065fea232b5f5a9de84f5
//TMDB_ACCESS_TOKEN=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODJhMmI1ZTY1NjA2NWZlYTIzMmI1ZjVhOWRlODRmNSIsIm5iZiI6MTcyMTU1NzA4Ny40NzAyMiwic3ViIjoiNjUxNWUxNGZhMTk5YTYwMGUxZmFlZjJhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.s02aessSv6KfDd6XIZpvL6nAdyWqatPQI8qydeGWDR0
  
  return (
    <Provider store={store}>
      <div
        style={{ backgroundImage: `url(${NETFLIX_START_BACKGROUND})` }}
        className="bg-cover h-screen -z-10 brightness-50"
      >
        <NavigateRouter />
      </div>
    </Provider>
  );
}

export default App;
