import React, { useState } from 'react'

import styled from 'styled-components'
import Loading from './components/CryptoGalleryLoading/CryptoGalleryLoading';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Crypto from './components/Crypto/Crypto';

function App() {
 
  const GlobalStyles = styled.div`
    
    background-image: radial-gradient( circle farthest-corner at 12.3% 19.3%,  rgba(85,88,218,1) 0%, rgba(95,209,249,1) 100.2% );  
  `

  const [loading, setLoading] = useState(true)

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
          <Loading loading={loading} setLoading={setLoading}/>
        </Route>
      </Switch>
    </Router>
    </GlobalStyles>
  );
}

export default App;
