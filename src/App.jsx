import React, { useState } from 'react'

import Header from "./components/Header/Header";

import styled from 'styled-components'
import Cryptos from "./components/Cryptos/Cryptos";
import Background from './components/Background/Background';

function App() {
 
  const Div = styled.div`
    
    /* height: 100%; */

    background: rgb(46,66,105);
    background: linear-gradient(180deg, #557ac5 0%, #004a86 100%);
    
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

  const [loading, setLoading] = useState(true)

  return (
    <Div>
      <Header />
      {
        !loading ? 
        
        <Background loading={loading}/>
      : null
      }

      <Cryptos
        setLoading={setLoading}
      />
    </Div>
  );
}

export default App;
