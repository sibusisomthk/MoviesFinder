
import React, { FC} from 'react';
import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { ITitleInfor } from '../../apis/movie';

interface IProps {
  movieDetails?: ITitleInfor;
}
const MovieInfor: FC<IProps> = ({ movieDetails }) => {
 console.log('infor',movieDetails)
  return (
    <Row className='movie-information'>
      <Col sm={4}>
        <Card>
          <Card.Img variant="top" src={movieDetails?.Poster} />
        </Card>
      </Col>
      <Col sm={4}>
        <ListGroup>
          <ListGroupItem>{`Genre:${movieDetails?.Genre}`}</ListGroupItem>
          <ListGroupItem>{`Rated:${movieDetails?.Rated}`}</ListGroupItem>
          <ListGroupItem>{`Runtime:${movieDetails?.Runtime}`}</ListGroupItem>
          <ListGroupItem>{`Rated:${movieDetails?.Rated}`}</ListGroupItem>
          <ListGroupItem>{`Production:${movieDetails?.Production}`}</ListGroupItem>
          <ListGroupItem>{`Actors:${movieDetails?.Actors}`}</ListGroupItem>
        </ListGroup>
      </Col>
      <Col sm={4}>
         <Card>
          <Card.Body>
            <Card.Subtitle>Plot</Card.Subtitle>
            <Card.Text>
              {movieDetails?.Plot}
            </Card.Text>
            </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default MovieInfor;