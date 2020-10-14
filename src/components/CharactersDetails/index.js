import {MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn} from "mdbreact";
import React from 'react';
import {useFetchApi} from "../../hooks/useFetchApi";
import styles from "../MoviesDetails/movieDetails.module.css";


export const CharactersDetails = () => {
  const characterDetails = useFetchApi('people')

  if (characterDetails === null) {
    return 'Loading...'
  }

  return (
    <div className="container">
      <MDBCard style={{ width: "22rem" }}>
        <img className={`img-fluid ${styles.border}`} src="/images/starwars.png" />
        <MDBCardBody>
          <MDBCardTitle className={styles['text']}>{characterDetails.name}</MDBCardTitle>
          <MDBCardText>
            <p>Birth year: {characterDetails.birth_year}</p>
            <p>Eye color: {characterDetails.eye_color}</p>
            <p>Gender: {characterDetails.gender}</p>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </div>
  )
}
