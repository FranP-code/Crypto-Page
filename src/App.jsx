import Header from "./components/Header/Header";
import styled from 'styled-components'
import Cryptos from "./components/Cryptos/Cryptos";

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

        &.one {

          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);

          top: 20%;
          left: calc(85vw - 200px);

          width: 180px;
          height: 180px;

          transform: rotate(14deg)
        }

        &.two {
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);

          clip-path: circle(50% at 50% 50%);
          
          top: 30%;
          left: 12vw;

          width: 170px;
          height: 170px; 
        }

        &.three {

          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
          clip-path: circle(50% at 50% 50%);
        
          top: 60%;
          left: calc(82vw - 200px);
          transform: rotate(30deg);

          width: 180px;
          height: 180px;
        }

        &.four {

          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
          
          top: 80%;
          left: 13vw;
          
          transform: rotate(-30deg);

          width: 100px;
          height: 100px;
        }

        &.five {

          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);

          top: 81%;
          left: 30vw;

          transform: rotate(-12deg);

          width: 80px;
          height: 80px;
        }

        &.six {

          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);

          top: 90%;
          left: 8vw;

          transform: rotate(30deg);

          width: 70px;
          height: 70px;
        }

        &.seven {

          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);

          top: 92%;
          left: 25vw;

          transform: rotate(-30deg);

          width: 100px;
          height: 100px;
        }

        &.eight {

          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        
          top: 95%;
          left: 20vw;
          transform: rotate(40deg)
        }
      }
    }

  `
  return (
    <Div>
      <Header />

      <div className="paths">
        <div className="path one"></div>
        <div className="path two"></div>
        <div className="path three"></div>
        <div className="path four"></div>
        <div className="path five"></div>
        <div className="path six"></div>
        <div className="path seven"></div>
        <div className="path eight"></div>
      </div>

      <Cryptos />
    </Div>
  );
}

export default App;
