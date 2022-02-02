import styled from 'styled-components';
import React, {useState} from 'react';

const Loading = ({loading, loadingURL}) => {

    const LoadingStyles = styled.div`

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        position: absolute;
        
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        z-index: 10000;

        background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% );
        
        img {

            width: 108px;

            margin-bottom: 3vh;

            animation: imgRotate 2s linear infinite;
        }

        h2 {

            color: #fff;
            font-family: "Raleway"
        }

        @keyframes imgRotate{
            0% {
                transform: rotate(0deg)
            }
            100% {
                transform: rotate(360deg)
            }
        }

        &.hidden {

            animation: hiddeLoading 2s ease-in-out forwards;
        }

        @keyframes hiddeLoading {
            50%{
                transform: translate(0, 0%)
            }
            100% {
                transform: translate(0, -100%)

            }   
        }
    `
    
    return (

        <LoadingStyles className={loading ? null : 'hidden'}>
            <img src={loadingURL} alt="loading" />
            <h2>Loading</h2>
        </LoadingStyles>
    )
};

export default Loading;
