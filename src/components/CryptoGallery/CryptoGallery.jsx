import React, { useState } from 'react';
import { Grid } from '@mui/material';
import styled from 'styled-components';
import CryptoGalleryItem from './CryptoGalleryItem';

import moment from 'moment';

const CryptoGallery = ({setLoading, setLoadingURL, loading}) => {

    const CryptosStyles = styled.div`

        position: relative;
        
        /* height: ${props => props.loading ? '1px' : 'auto'}; */

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

            background: rgba( 78, 159, 255, 0);
            backdrop-filter: blur( 14px );
                -webkit-backdrop-filter: blur( 14px );

            
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
            transition: 0.25s ease-in-out;

            :hover {
                background: #21202950;
            }

            .line {

                /* height: 38vh !important; */
                /* width: 54.19vh !important;  */
                margin-top: 10vh;
                /* margin-bottom: 5vh; */
                /* margin-bottom: 10vh; */
                cursor: initial;
            }
        }
    `
    const [cryptosPrices, setCryptosPrices] = useState(false)
    const [cryptosList, setCryptosList] = useState(false)

    const [dates, setDates] = useState([])

    const getCryptocurrencyData = async () => {

        try {
            
            let data = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=30&order=gecko_desc")
            data = await data.json()

            console.log(data)
            return data
            
        } catch (error) {
            
            console.log(error);
        }
    }

    const getCryptoPrices = async (data) => {

        try {
          
            console.log(data.id)
            let requestData = await fetch(`https://api.coingecko.com/api/v3/coins/${data.id}/market_chart?vs_currency=usd&days=6&interval=daily`)
            requestData = await requestData.json()
    
            console.log(requestData)

            return requestData.prices
    
        } catch (error) {
            console.log(error)
        }
    }

    const generateArrayOfDates = () => {

        //Generate array of dates

        let datesArray = []

        for (let i = 0; i < 7; i++) {
            
            datesArray.push(moment().subtract(i, 'days').format('DD-MM')) 
        }

        datesArray.reverse()
        return datesArray
    }

    const effectHandler = async () => {

        const data = await getCryptocurrencyData()
        setCryptosList(data)

        const lastDayPrices = localStorage.getItem('lastDayPrices')
        const actualDay = moment().format('DD-MM-YYYY')

        console.log(actualDay)
        setDates(generateArrayOfDates())

        // In the case the las day prices are today, just restore them from Local Storage
        if (lastDayPrices === actualDay) {

            const prices = JSON.parse(localStorage.getItem('prices'))

            console.log('Prices accessed from LocalStorage')
            console.log(lastDayPrices)

            setCryptosPrices(prices)
            
            return
        }

        // If not, extract all them from the API
        console.log('Prices accessed from API')

        let cryptoPricesCopy = []

        async function asyncForEach(array, callback) {
            for (let i = 0; i < array.length; i++) {
              await callback(array[i], i, array);
            }
        } // Credits https://codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404
          
        await asyncForEach(data, async (object) => {

            setLoadingURL(object.image)

            let requestData = await getCryptoPrices(object)
            console.log(requestData)

            requestData = requestData.map(arr => {

                return [arr[1], arr[1]]
                
            })

            console.log(requestData)

            let objectResult = {}
                objectResult[object.id] = {}
                objectResult[object.id].prices = requestData
            cryptoPricesCopy.push(objectResult)
        })

        await setCryptosPrices(await cryptoPricesCopy)
        console.log(await cryptosPrices)
    }
    
    React.useEffect(() => {
        

        effectHandler()
        
    }, [])

    React.useEffect(() => {

        console.log(cryptosPrices)

        //Once prices are loaded into the state...
        if (cryptosPrices) {
            
            //Almacenate prices on LocalStorage
            const jsonString = JSON.stringify(cryptosPrices)
            localStorage.setItem('prices', jsonString)
            console.log(JSON.parse(localStorage.getItem('prices')))

            //Almacenate actual day on LocalStorage
            const actualDay = moment().format('DD-MM-YYYY')
            localStorage.setItem('lastDayPrices', actualDay)
        }    
    }, [cryptosPrices])

    return (
        <>
        {
            cryptosPrices ? 
                <CryptosStyles>
                        <Grid container columnSpacing={4} rowSpacing={6} className='grid'>
                            {
                                cryptosList.map((crypto, index) => (
                                    <CryptoGalleryItem
                                        CryptoStyles={CryptoStyles}
                                        data={crypto}
                                        cryptoPrices={cryptosPrices[index]}
                                        key={crypto.id}
                                        dates={dates}

                                        index={index}
                                        cryptoListLength={cryptosList.length}

                                        loading={loading}
                                        setLoading={setLoading}
                                    />                                    
                                ))
                            }
                                {/* <Crypto CryptoStyles={CryptoStyles} />
                                <Crypto CryptoStyles={CryptoStyles} />
                                <Crypto CryptoStyles={CryptoStyles} />
                                <Crypto CryptoStyles={CryptoStyles} />
                                <Crypto CryptoStyles={CryptoStyles} />
                                <Crypto CryptoStyles={CryptoStyles} /> */}
                        </Grid>
                </CryptosStyles>
            : null
        }

        </>
        );
};

export default CryptoGallery;
