import './styles.css';
import React, { FC, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { getFavouriteMovies } from '../../helpers/localStorageData';
import MoviesView from '../movies-container';
import { ITitle } from '../../apis/movie';

interface IProps {
  setLoading:Function;
}
const FavouriteMovies: FC<IProps> = ({setLoading}) => {

  const [movies,setMovies] = useState<ITitle[]>([]);
  useEffect(() => {
    setMovies(getFavouriteMovies());
  }, []);

 
  return (
    <Container className='favourite-movies-view'>
      <Row>
      <Col> {movies.length>0 && <div> You have <strong>{movies.length}</strong> favourite movies </div>}</Col>
      </Row>
      <Row>
      <MoviesView moviesList={movies} setLoading={setLoading}/>
      </Row>

    </Container>
  );
};

export default FavouriteMovies;