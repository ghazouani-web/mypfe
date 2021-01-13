import React, { useState ,useEffect } from "react";
import { Redirect} from "react-router-dom";
import {useDispatch , useSelector } from "react-redux";
import {getProfile} from '../../JS/actions/authActions'

import './Entreprise.scss';
import {Row , Col , Navbar} from 'react-bootstrap'
import Deconnexion from './Deconnexion';
import Search from '../Home/Search';
import {Link} from 'react-router-dom'


export default function Entreprise() {

  const isLoading = useSelector (state => state.userReducer.isLoading)
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const token = useSelector((state) => state.userReducer.token);
  const dispatch = useDispatch()


useEffect(() => {
  dispatch(getProfile(token));
}, [token, dispatch]);

  if(isLoading) return <h1>please wait...</h1>;
  if(!isAuth) return <Redirect to = "/login"/>;

    return (
        <div >
           <Navbar bg="light" variant="light">
             <Row>
               <Col>
           <Search/>
           </Col>
           <Col>
           <Deconnexion/>       
           </Col>
           </Row>
           </Navbar>
           <header className="header" role="banner">
        <h1 className="logo">
          <a href="m">nom <span>d'Entreprise</span></a>
        </h1>
        <div className="nav-wrap">
          <nav className="main-nav" role="navigation">
            <ul className="unstyled list-hover-slide">
              <li><Link to ='/Profile/Entreprise/Tabs'>Les Articles Haut</Link></li>
              <li><Link to ='/Profile/Entreprise/Tabs'>Les Articles Bas</Link></li>
              <li><Link to ='/Profile/Entreprise/Tabs'>Les chaussures</Link></li>
            </ul>
          </nav>
          <ul className="social-links list-inline unstyled list-hover-slide">
            <li><a href="m">Twitter</a></li>
            <li><a href="m">Google+</a></li>
            <li><a href="m">GitHub</a></li>
            <li><a href="m">CodePen</a></li>
          </ul>
        </div>
      </header>   
        </div>
    )
}
