import React, { useState } from 'react';
import styled from 'styled-components';
import { CustomPath } from './CustomPath.styled';

const Background = ({loading}) => {

    const [seriesOfPaths, setSeriesOfPaths] = useState([])
    const pathsData = [

        {
          top: "20%",
          left: "calc(85vw - 200px)",
    
          clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
    
          width: "180px",
          height: "180px",
    
          transform: "rotate(14deg)"
        },
        
        {
          top: "30%",
          left: "12vw",
    
          clipPath: "circle(50% at 50% 50%)",
          width: "170px",
          height: "170px" 
        },
    
        {
          top: "60%",
          left: "calc(82vw - 200px)",
    
          clipPath: "circle(50% at 50% 50%)",
            
          transform: "rotate(30deg)",
    
          width: "180px",
          height: "180px"
        },
    
        {
          top: "80%",
          left: "13vw",
    
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              
          transform: "rotate(-30deg)",
    
          width: "100px",
          height: "100px"
    
        },
    
        {
          top: "81%",
          left: "30vw",
    
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
    
          transform: "rotate(-12deg)",
    
          width: "80px",
          height: "80px"
        },
    
        {
          top: "90%",
          left: "8vw",
    
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
    
          transform: "rotate(30deg)",
    
          width: "70px",
          height: "70px"
        }, 
    
        {
          top: "92%",
          left: "25vw",
    
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
    
          transform: "rotate(-30deg)",
    
          width: "100px",
          height: "100px"
        },
    
        {
          top: "95%",
          left: "20vw",
    
          clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            
          transform: "rotate(40deg)"
        }
      ]

    const BackgroundStyles = styled.div`
      
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
    `
    

    const pathFunction = () => {

        const serie = 5
        let seriesOfPaths = []

        for (let i = 0; i < serie; i++) {
        
        seriesOfPaths.push(i)
        }
        
        setSeriesOfPaths(seriesOfPaths)
    }

    React.useEffect(() => {

      pathFunction()

    }, [])
    
    
    return <BackgroundStyles>
        {
           
            seriesOfPaths.map(serie => (
                <div
                  className="paths"
                  style={{top: serie * 520 + "px"}}
                  key={serie}
                >
                  {
      
                  pathsData.map((object, index) => (
                    
                    <CustomPath
                      className="path"
        
                      top={object.top}
                      left={object.left}
        
                      clipPath={object.clipPath}
        
                      width={object.width}
                      height={object.height}
        
                      transform={object.transform}
        
                      serieNumber={serie}

                      key={index}
                    />
                  ))
                }
            </div>    
          ))
        }
    </BackgroundStyles> 
};

export default Background;
