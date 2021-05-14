import './styles.css';
import { FC, useState } from 'react';
import { Button, Card, CardImg, Col, Container, ListGroup, ListGroupItem, Modal, Row } from 'react-bootstrap';
import { View } from '../../enums/view';
import { ITitle, ITitleInfor } from '../../apis/movie';
import { fetchMovie } from '../../services/rapidApiService';
import { saveToFavouriteMovies } from '../../helpers/localStorageData';
import MovieInfor from '../movie-information';

interface IProps {
  moviesList: ITitle[];
  setLoading:Function;
}
const MoviesView: FC<IProps> = ({ moviesList ,setLoading}) => {

  const [view, setView] = useState<View>(View.List);
  const [activeTitle, setActiveTitle] = useState<ITitleInfor|null>(null)
  const updateState = (loading: boolean,title?: ITitleInfor) => {
    setLoading(loading);
    title && setActiveTitle(title);
  }

  const getImage = (id: string) => {
    fetchMovie(id, updateState);
  }
  const onAddToFavourite = (id?:string) =>{
    if(!id)return;
    const title = moviesList.find(title=>{return title?.imdbID ===id});
    if(title)saveToFavouriteMovies(title);
    setActiveTitle(null);
  }

  //list view
  const listView = (<ListGroup> {moviesList &&
    moviesList.map((title, i) => {
      //@ts-ignore
      return (<ListGroupItem key={i} onClick={() => getImage(title?.imdbID)}>
        <div className='image-container'><img alt='movie poster' style={{ width: '200px', height: '200px' }} src={title?.Poster} /></div>
        <div className='title'>{title?.Title}</div>
      </ListGroupItem>)
    })}</ListGroup>);
  
    //card view
  const cardView = (<Row md={4} > {moviesList &&
    moviesList.map((title, i) => {
      //@ts-ignore
      return (<Col sm={3} key={i} onClick={() => getImage(title?.imdbID)}>
        <Card>
          <CardImg variant='top' src={title?.Poster} />
          <Card.Body>
            <Card.Title>{title?.Title}</Card.Title>
            <Card.Subtitle>{title?.Type}</Card.Subtitle>
            <Card.Text>{title?.Year}</Card.Text>
          </Card.Body>
        </Card>
      </Col>)
    })}</Row>);

  return (

    <Container className='movies-view'>
      {activeTitle && <Modal show={activeTitle!==null} >
        <Modal.Header>
          <Modal.Title>
            {activeTitle?.Title}
          </Modal.Title>
        </Modal.Header>
        {console.log('rendering modal')}
        <Modal.Body>
          <MovieInfor movieDetails={activeTitle}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={()=>setActiveTitle(null)}>Close</Button>
          <Button variant='primary' onClick={()=>onAddToFavourite(activeTitle?.imdbID)}>Add to Favourite</Button>
        </Modal.Footer>

      </Modal>}
      <Row>
        <Col sm={12}>
          <div className='toggle-view'>
            <div className={`view ${view === View.List ? 'active' : ''}`} onClick={() => setView(View.List)}>
              <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                <path fill="currentColor" d="M3,4H7V8H3V4M9,5V7H21V5H9M3,10H7V14H3V10M9,11V13H21V11H9M3,16H7V20H3V16M9,17V19H21V17H9" />
              </svg>
            </div>
            <div className={`view ${view === View.Card ? 'active' : ''}`} onClick={() => setView(View.Card)}>
              <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                <path fill="currentColor" d="M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3" />
              </svg>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        {view === View.List && listView}
      </Row>
      {view === View.Card && cardView}
    </Container>
  );
};

export default MoviesView;