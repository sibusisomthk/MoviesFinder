import './styles.css';
import React, { FC, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { View } from '../../enums/view';

interface IProps {
}
const MoviesView: FC<IProps> = () => {

  const [view, setView] = useState<View>(View.List);


  return (
    <Container className='movies-view'>
      <Row>
        
      </Row>

    </Container>
  );
};

export default MoviesView;