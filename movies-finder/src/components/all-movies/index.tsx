import './styles.css';
import React, { FC, useEffect, useState } from 'react';
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap';

interface IProps {
}
const FindMovies: FC<IProps> = () => {
  const [search, setSearchValue] = useState('');
  const [movies,setMovies] = useState([]);
  console.log('search', search)
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

      </Row>
    </Container>
  );
};

export default FindMovies;