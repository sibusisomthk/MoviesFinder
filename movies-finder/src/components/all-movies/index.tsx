import './styles.css';
import React, { FC, useEffect, useState } from 'react';
import { Button, Col, Container, FormControl, Row, Spinner } from 'react-bootstrap';
import { searchMovies } from '../../services/rapidApiService';
import { ITitle } from '../../apis/movie';
import MoviesView from '../movies-container';

interface IProps {
}
const FindMovies: FC<IProps> = () => {
  const [search, setSearchValue] = useState('');
  const [isSearchLoading, setSearchLoading] = useState(false);
  const [movies,setMovies] = useState<ITitle[]>([]);

  useEffect(() => {
  }, [movies]);
  const updateState=(loading:boolean,movieslist?:ITitle[])=>{
    if(movieslist)setMovies(movieslist);
    setSearchLoading(loading);
  }
  const onSearch = ()=>{
    searchMovies(search,1,updateState);
  }
  const renderMovies =()=> movies && <MoviesView moviesList={movies} isFavouriteList={false}/>;
  return (
    <Container className='find-movies-view'>
      <Row>
        <Col sm={9}>
          <FormControl 
            type='text'
            name='search'
            placeholder='Search by title'
            defaultValue={search}
            onChange={(e)=>setSearchValue(e.target.value)}
          />
        </Col>
        <Col sm={3}><Button variant="secondary" onClick={()=>onSearch()} >Search</Button></Col>
       
      </Row>
      <Row>
      <Col> {movies.length>0 && <div> found <strong>{movies.length}</strong> movies </div>}</Col>
      </Row>
      
      <Row>
      {isSearchLoading? <Spinner animation="border" />:
      (renderMovies())}
      </Row>
    </Container>
  );
};

export default FindMovies;