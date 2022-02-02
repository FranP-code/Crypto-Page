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
import Header from './components/Header/Header';
import Background from './components/Background/Background';
import Cryptos from './components/CryptoGallery/CryptoGallery';

function App() {
 
  const GlobalStyles = styled.div`
    
    background-image: radial-gradient( circle farthest-corner at 12.3% 19.3%,  rgba(85,88,218,1) 0%, rgba(95,209,249,1) 100.2% );  
  `

  const [loading, setLoading] = useState(true)
  const [loadingURL, setLoadingURL] = useState('https://i.ibb.co/Dwygw0t/Logo-reduced.png')

  React.useEffect(() => {

    if (loading) {

      document.body.style.overflow = "hidden"
    
    } else {

      setTimeout(() => {
        
        document.body.style.overflow = "visible"
      
      }, 2000);
      
    } //https://stackoverflow.com/questions/39962757/prevent-scrolling-using-css-on-react-rendered-components
  }, [loading])

  return (
    <GlobalStyles>

    <Router>
      <Switch>
        <Route path="/crypto/:cryptoID">
          <Crypto />
        </Route>
        <Route path="/">
          <CryptoGalleryLoading loading={loading} loadingURL={loadingURL} setLoading={setLoading}/>
          <Header />
            <Background
                loading={loading}
            />
            <Cryptos
                loading={loading}
                setLoading={setLoading}
                setLoadingURL={setLoadingURL}
            />
        </Route>
      </Switch>
    </Router>
    </GlobalStyles>
  );
}

export default App;
