import React from 'react';
import { MDBNavbarNav, MDBNavItem } from "mdbreact";
import styles from './navigation.module.css'
import { Link, useLocation } from "react-router-dom";
import classnames from 'classnames';

const Navigation = () => {
  const location = useLocation();

  return(
    <>
      <MDBNavbarNav className="d-block sidebar"
           activeKey="/home"
           onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
        <MDBNavItem className={classnames(styles.navitem, {
          navselected: location.pathname === '/characters'
        })}>
          <Link to="/characters">CHARACTERS</Link>
        </MDBNavItem>
        <MDBNavItem className={classnames(styles.navitem, {
          navselected: location.pathname === '/movies'
        })}>
          <Link to="/movies">MOVIES</Link>
        </MDBNavItem>
      </MDBNavbarNav>
    </>
  )
}

export default Navigation;
