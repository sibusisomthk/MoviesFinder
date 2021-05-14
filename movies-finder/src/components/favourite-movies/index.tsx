import './styles.css';
import React, { FC, useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { getFavouriteMovies } from '../../helpers/localStorageData';
import MoviesView from '../movies-container';
import { ITitle } from '../../apis/movie';

interface IProps {
}
const FavouriteMovies: FC<IProps> = () => {

  const [movies,setMovies] = useState<ITitle[]>([]);
  useEffect(() => {
    setMovies(getFavouriteMovies());
  }, []);
  const OnRefresh=()=>{
    setMovies(getFavouriteMovies());
  }

 
  return (
    <Container className='favourite-movies-view'>
      <Row>
      <Col> {movies.length>0 && <div> You have <strong>{movies.length}</strong> favourite movies </div>}</Col>
      <Col ><Button variant='secondary' onClick={()=>OnRefresh()}>Refresh</Button></Col>
      </Row>
      <Row>
      <MoviesView moviesList={movies} />
      </Row>

    </Container>
  );
};

export default FavouriteMovies;