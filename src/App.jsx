import Header from "./components/Header/Header";
import styled from 'styled-components'

function App() {

  const Div = styled.div`
    
    height: 100%;

    background: rgb(46,66,105);
    background: linear-gradient(180deg, rgba(46,66,105,1) 0%, rgba(0,26,47,1) 100%);
    
    .paths {

      height: 100%;

      position: absolute;
      
      top: 0;
      left: 0;

      .path {

        &::before {

          content: "";
          background: red;
        }
        
        /* background: #ffffff45; */
        background: rgb(255,255,255);
        background: linear-gradient(135deg, rgba(255,255,255,0.08727240896358546) 0%, rgba(46,66,105,0.07046568627450978) 100%);

        position: absolute;

        &:nth-child(1) {

          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);

          top: 20%;
          left: calc(85vw - 200px);

          width: 180px;
          height: 180px;

          transform: rotate(14deg)
        }

        &:nth-child(2) {
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);

          clip-path: circle(50% at 50% 50%);
          
          top: 30%;
          left: 12vw;

          width: 170px;
          height: 170px; 
        }

        &:nth-child(3) {

          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
          clip-path: circle(50% at 50% 50%);
        
          top: 60%;
          left: calc(82vw - 200px);
          transform: rotate(30deg);

          width: 180px;
          height: 180px;
        }

        &:nth-child(4) {

          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
          
          top: 80%;
          left: 13vw;
          
          transform: rotate(-30deg);

          width: 100px;
          height: 100px;
        }

        &:nth-child(5) {

          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);

          top: 81%;
          left: 30vw;

          transform: rotate(-12deg);

          width: 80px;
          height: 80px;
        }

        &:nth-child(6) {

          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);

          top: 90%;
          left: 8vw;

          transform: rotate(30deg);

          width: 70px;
          height: 70px;
        }

        &:nth-child(7) {

          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);

          top: 92%;
          left: 25vw;

          transform: rotate(-30deg);

          width: 100px;
          height: 100px;
        }

        &:nth-child(8) {

          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        
          top: 100%;
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
        <div className="path"></div>
        <div className="path"></div>
        <div className="path"></div>
        <div className="path"></div>
        <div className="path"></div>
        <div className="path"></div>
        <div className="path"></div>
        <div className="path"></div>
      </div>
    </Div>
  );
}

export default App;
