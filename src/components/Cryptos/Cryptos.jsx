import React from 'react';
import { Grid } from '@mui/material';
import styled from 'styled-components';
import Crypto from './Crypto';

const Cryptos = () => {

    const CryptosStyles = styled.div`

        position: relative;

        z-index: 100;

        margin-top: 5vh;

        .grid {

            padding: 0px 10vw;
        }

        .item {

            /* width: 100px; */
            height: 100px;

            background: #101116;
        }
    `
    const CryptoStyles = styled(Grid)` // https://stackoverflow.com/questions/68248337/how-to-override-material-ui-css-with-styled-component

        .card {

            background: rgba( 78, 159, 255, 0) !important;
        }

        .container {
            background: rgba( 78, 159, 255, 0.25 );
            backdrop-filter: blur( 14px );
            -webkit-backdrop-filter: blur( 14px );
            border-radius: 10px;
            border: 1px solid rgba( 255, 255, 255, 0.18 );
            /* height: 80vh; */
            user-select: none;
            cursor: pointer;

            .line {

                /* height: 38vh !important; */
                /* width: 54.19vh !important;  */
                margin-top: 7vh;
                /* margin-bottom: 5vh; */
                /* margin-bottom: 10vh; */
                cursor: initial;
            }
        }
    `

//   const data = [{coin: "BTC", price: 400, day: "12-02"}, {coin: "BTC", price: 110, day: "13-02"}, {coin: "BTC", price: 450, day: "14-02"}]

  return (
      <CryptosStyles>
            <Grid container columnSpacing={4} rowSpacing={6} className='grid'>
                    <Crypto CryptoStyles={CryptoStyles} />
                    <Crypto CryptoStyles={CryptoStyles} />
                    <Crypto CryptoStyles={CryptoStyles} />
                    <Crypto CryptoStyles={CryptoStyles} />
                    <Crypto CryptoStyles={CryptoStyles} />
                    <Crypto CryptoStyles={CryptoStyles} />
            </Grid>
      </CryptosStyles>
    );
};

export default Cryptos;
