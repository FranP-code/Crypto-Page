import React, { useState } from 'react'

import Header from "./components/Header/Header";

import styled from 'styled-components'
import Cryptos from "./components/Cryptos/Cryptos";
import Background from './components/Background/Background';
import Loading from './components/Loading/Loading';

function App() {
 
  const Div = styled.div`
    
    /* height: 100%; */

    background-image: radial-gradient( circle farthest-corner at 12.3% 19.3%,  rgba(85,88,218,1) 0%, rgba(95,209,249,1) 100.2% );
    
    .paths {

      height: 100%;

      position: absolute;
      
      top: 0;
      left: 0;

      z-index: 1;

      .path {

        &::before {

          content: "";
          background: red;
        }
        
        /* background: #ffffff45; */
        background: rgb(255,255,255);
        background: linear-gradient(135deg, #ffffff4e 0%, #2e426965 100%);

        position: absolute;
      }
  }`


  return (
    <Div>
      <Loading />
    </Div>
  );
}

export default App;
