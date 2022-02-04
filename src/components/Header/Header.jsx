import React from 'react';
import styled from 'styled-components'

const Header = () => {

    const Header = styled.header`

        display: flex;
        justify-content: center;

        padding: 3vh 0px;
        
        border-bottom: solid 2px #ffffff24;

        user-select: none;
        
        h1 {

            font-family: 'Raleway', sans-serif;
            color: #fff;
        }
    `

    return (
    
        <Header>
            <h1>Crypto Prices</h1>
        </Header>
    )
};

export default Header;
