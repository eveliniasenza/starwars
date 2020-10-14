import {MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText} from "mdbreact";
import React from 'react';
import {useFetchApi} from "../../hooks/useFetchApi";
import styles from './movieDetails.module.css'

const MovieDetails = () => {
  const movieDetails = useFetchApi('films')

  if (movieDetails === null) {
    return 'Loading...'
  }

  return (
    <div className="container">
      <MDBCard style={{ width: "22rem" }}>
        <img className={`img-fluid ${styles.border}`} src="/images/starwars.png" />
        <MDBCardBody>
          <MDBCardTitle className={styles['text']}>{movieDetails.title}</MDBCardTitle>
          <MDBCardText>
            <p>Director: {movieDetails.director}</p>
            <p>Producer: {movieDetails.producer}</p>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </div>
  )
}
export default MovieDetails;
