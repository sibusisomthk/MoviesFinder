import './styles.css';
import React, { FC, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

interface IProps {
}
const FavouriteMovies: FC<IProps> = () => {

  const [movies, setMovies] = useState(['', '',]);

 
  return (
    <Container className='favourite-movies-view'>
      <Row>

      </Row>

    </Container>
  );
};

export default FavouriteMovies;