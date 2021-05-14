import './styles.css';
import React, { FC, useEffect, useState } from 'react';
import { Col, Container, FormControl, Row, Spinner } from 'react-bootstrap';
import { searchMovies } from '../../services/rapidApiService';
import { ITitle } from '../../apis/movie';
import { getSearchResults } from '../../helpers/localStorageData';
import MoviesView from '../movies-container';

interface IProps {
}
const FindMovies: FC<IProps> = () => {
  const [search, setSearchValue] = useState('');
  const [isSearchLoading, setSearchLoading] = useState('');
  const [movies,setMovies] = useState<ITitle[]>([]);
  useEffect(() => {
    setMovies(getSearchResults())
  }, []);
  
  useEffect(() => {
    console.log('arived',isSearchLoading)
    setMovies(getSearchResults())
  }, [isSearchLoading]);

  useEffect(() => {
    if(search){
      searchMovies(search,1,setSearchLoading);
    }
  }, [search]);

  return (
    <Container className='find-movies-view'>
      <Row>
        <Col sm={8}>
          <FormControl 
            type='text'
            name='search'
            placeholder='Search by title'
            defaultValue={search}
            onChange={(e)=>setSearchValue(e.target.value)}
          />
        </Col>
       
      </Row>
      <Row>
      <Col> {movies.length>0 && <div> found <strong>{movies.length}</strong> movies </div>}</Col>
      </Row>
      
      <Row>
      {isSearchLoading? <Spinner animation="border" />:
      <MoviesView moviesList={movies}/>}
      </Row>
    </Container>
  );
};

export default FindMovies;