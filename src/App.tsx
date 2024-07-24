import { NETFLIX_START_BACKGROUND } from './config';
import './App.css';
import NavigateRouter from './components/Router';
import { Provider } from 'react-redux';
import { store } from './utils/store';

function App() {

  
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
