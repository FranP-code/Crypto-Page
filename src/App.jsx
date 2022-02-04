import React, { useState } from 'react'

import styled from 'styled-components'
import CryptoGalleryLoading from './components/CryptoGalleryLoading/CryptoGalleryLoading';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Crypto from './components/Crypto/Crypto';

import CryptoGalleryContainer from './components/CryptoGallery/CryptoGalleryContainer'
import Footer from './components/Footer/Footer';

function App() {
 
  const GlobalStyles = styled.div`
    
    background-image: radial-gradient( circle farthest-corner at 12.3% 19.3%,  rgba(85,88,218,1) 0%, rgba(95,209,249,1) 100.2% );  
  `

  return (
    <GlobalStyles>
      <Router>
        <Switch>
          <Route path="/crypto/:cryptoID">
            <Crypto />
          </Route>
          <Route path="/">
            <CryptoGalleryContainer />
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </GlobalStyles>
  );
}

export default App;
