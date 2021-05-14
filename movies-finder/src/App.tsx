import React, { FC, useState } from 'react';
import './App.css';
import FindMovies from './components/all-movies';
import FavouriteMovies from './components/favourite-movies';
import { Spinner, Tab, Tabs } from 'react-bootstrap';
interface IProps { }

const App: FC<IProps> = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className='App'>
      <header className='App-header'>
        IMDB Movies
      </header>
      {loading ? <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner> :
        <Tabs defaultActiveKey='FindMoviesTab' id='uncontrolled-tab-example'>
          <Tab eventKey='FindMoviesTab' title='Find Movies'>
            <FindMovies setLoading={() => setLoading} />
          </Tab>
          <Tab eventKey='FavouriteMoviesTab' title='Favourite Movies'>
            <FavouriteMovies setLoading={() => setLoading} />
          </Tab>
        </Tabs>}
    </div>
  );
}
export default App;