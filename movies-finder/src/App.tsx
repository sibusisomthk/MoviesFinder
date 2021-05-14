import React, { FC, useState } from 'react';
import './App.css';
import FindMovies from './components/all-movies';
import FavouriteMovies from './components/favourite-movies';
import { Spinner, Tab, Tabs } from 'react-bootstrap';
interface IProps { }

const App: FC<IProps> = () => {
  const [loading, setLoading] = useState(false);
  console.log('loading',loading)
  return (
    <div className='App'>
      <header className='App-header'>
        IMDB Movies
      </header>
        <Tabs defaultActiveKey='FindMoviesTab' id='uncontrolled-tab-example'>
          <Tab eventKey='FindMoviesTab' title='Find Movies'>
            <FindMovies />
          </Tab>
          <Tab eventKey='FavouriteMoviesTab' title='Favourite Movies'>
            <FavouriteMovies />
          </Tab>
        </Tabs>
    </div>
  );
}
export default App;