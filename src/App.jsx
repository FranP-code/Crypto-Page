import Header from "./components/Header/Header";
import styled from 'styled-components'
import Cryptos from "./components/Cryptos/Cryptos";

function App() {

  const pathsPosition = {

    one: {
      top: "20%",
      left: "calc(85vw - 200px)"
    },
    
    two: {
      top: "30%",
      left: "12vw"
    },

    three: {
      top: "60%",
      left: "calc(82vw - 200px)"
    },

    four: {
      top: "80%",
      left: "13vw"
    },

    five: {
      top: "81%",
      left: "30vw"
    },

    six: {
      top: "90%",
      left: "8vw"
    }, 

    seven: {
      top: "92%",
      left: "25vw"
    },

    eight: {
      top: "95%",
      left: "20vw"
    }
  }


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

          top: ${pathsPosition.one.top};
          left: ${pathsPosition.one.left};

          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);

          width: 180px;
          height: 180px;

          transform: rotate(14deg);

          &.second {

            top: calc(${pathsPosition.one.top}  + 100%)
          }
        }

        &.two {
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);

          clip-path: circle(50% at 50% 50%);
          
          top: ${pathsPosition.two.top};
          left: ${pathsPosition.two.left};

          width: 170px;
          height: 170px; 

          &.second {

            top: calc(${pathsPosition.two.top} + 100%)
          }
        }

        &.three {

          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
          clip-path: circle(50% at 50% 50%);
        
          top: ${pathsPosition.three.top};
          left: ${pathsPosition.three.left};
          transform: rotate(30deg);

          width: 180px;
          height: 180px;

          &.second {

            top: calc(${pathsPosition.three.top} + 100%)
          }
        }

        &.four {

          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
          
          top: ${pathsPosition.four.top};
          left: ${pathsPosition.four.left};
          
          transform: rotate(-30deg);

          width: 100px;
          height: 100px;

          &.second {

            top: calc(${pathsPosition.four.top} + 100%)
          }
        }

        &.five {

          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);

          top: ${pathsPosition.five.top};
          left: ${pathsPosition.five.left};

          transform: rotate(-12deg);

          width: 80px;
          height: 80px;

          &.second {

            top: calc(${pathsPosition.five.top} + 100%)
          }
        }

        &.six {

          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);

          top: ${pathsPosition.six.top};
          left: ${pathsPosition.six.left};

          transform: rotate(30deg);

          width: 70px;
          height: 70px;

          &.second {

            top: calc(${pathsPosition.six.top} + 100%)
          }
        }

        &.seven {

          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);

          top: ${pathsPosition.seven.top};
          left: ${pathsPosition.seven.left};

          transform: rotate(-30deg);

          width: 100px;
          height: 100px;

          &.second {

            top: calc(${pathsPosition.seven.top} + 100%)
          }
        }

        &.eight {

          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        
          top: ${pathsPosition.eight.top};
          left: ${pathsPosition.eight.left};
          transform: rotate(40deg)
        }

        &.second {

          top: calc(${pathsPosition.eight.top} + 100%)
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
        <div className="path one second"></div>
        <div className="path two second"></div>
        <div className="path three second"></div>
        <div className="path four second"></div>
        <div className="path five second"></div>
        <div className="path six second"></div>
        <div className="path seven second"></div>
        <div className="path eight second"></div>
      </div>

      <Cryptos />
    </Div>
  );
}

export default App;
