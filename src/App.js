import React from 'react';
import { MDBRow, MDBCol } from "mdbreact";
import {Route, HashRouter as Router, Switch} from "react-router-dom";
import Banner from "./components/Banner";
import {Characters} from "./components/Characters";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {CharactersDetails} from "./components/CharactersDetails";
import {Movies} from "./components/Movies";
import MoviesDetails from "./components/MoviesDetails";
import Navigation from "./components/Navigation";
import './App.css';


function App() {
  return (
    <Router>
      <Banner/>
      <div className='content'>
        <MDBRow>
          <MDBCol xs={12} sm={12} md={3}>
            <Navigation/>
          </MDBCol>
          <MDBCol xs={6} sm={6} md={4}>
            <Switch>
              <Route path="/characters" component={Characters} />
              <Route path="/movies" component={Movies} />
            </Switch>
          </MDBCol>
          <MDBCol xs={6} sm={6} md={5}>
            <Switch>
              <Route path="/characters/:id" component={CharactersDetails} />
              <Route path="/movies/:id" component={MoviesDetails} />
            </Switch>
          </MDBCol>
        </MDBRow>
      </div>
    </Router>
  );
}

export default App;
