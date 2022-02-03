import React, { useState } from 'react';

import moment from 'moment';
import {useParams} from 'react-router-dom'

import { Chart as ChartJS } from 'chart.js/auto'
import { Chart, Line }            from 'react-chartjs-2' //WTF https://stackoverflow.com/questions/67727603/error-category-is-not-a-registered-scale
import { Grid, Button, capitalize, Switch, FormControlLabel } from '@mui/material';
import styled from 'styled-components';
import CryptoPricesModule from './CryptoPricesModule';
import CryptoButtonModule from './CryptoButtonModule';
import { Box } from '@mui/system';
import Loading from './Loading';

import getCryptoData from './API calls/getCryptoData';
import getCryptoPrice from './API calls/getCryptoPrice';
import getDates from './API calls/getDates'

const Crypto = () => {

    const CryptoStyles = styled(Grid)`
        
        height: 100vh;

        header {

            display: flex;
            align-items: center;

            img {
                margin: 1vw;
            }

            h1 {

                font-family: 'Raleway', 'Arial';
                color: #fff;

                font-size: 2.5rem;
                user-select: none;
            }
        }

        .line {

            margin-right: 5vw;
            margin-top: 3vh;
        }

        @media (max-width: 900px) {

            height: 100%;

            .line {

                margin: 1vw;
            }
        }
    `

    const StylesCryptoPricesModule = styled.div`
        
        .card {

            margin: 1vw;
            background-color: #ffffff44;
        }
    `

    const StylesCryptoButtonModule = styled(Button)`

        background-color: #555555 !important;
    `

    const BackToTheGalleryStyles = styled(Button)`

        width: 94%;
        box-sizing: border-box;

        /* padding: 0 !important; */

        background: #4CAF50 !important;

        svg {
           
            width: 30px;
        }

        @media(max-width: 900px) {

            width: 98%;
        }
    `

    const plugin = {
        id: 'custom_canvas_background_color',
        beforeDraw: (chart) => {
          const ctx = chart.canvas.getContext('2d');
          ctx.save();
          ctx.globalCompositeOperation = 'destination-over';
          ctx.fillStyle = '#000';
          ctx.fillRect(0, 0, chart.width, chart.height);
          ctx.restore();
        }
    }


    const cryptoID = useParams().cryptoID

    const [cryptoData, setCryptoData] = useState(false)
    const [cryptoPrices, setCryptoPrices] = useState(false)
    const [dates, setDates] = useState(false)

    const [loading, setLoading] = useState(true)
    const [loadingURL, setLoadingURL] = useState('https://i.ibb.co/Dwygw0t/Logo-reduced.png')
    const [contentLoaded, setContentLoaded] = useState(false)

    const [lineDatesInterval, setLineDatesInterval] = useState('week')

    const [linePoints, setLinePoints] = useState(true)
    
    const effectHandler = async () => {

        const data = await getCryptoData(cryptoID)

        const cryptoPricesPrevious = {}
        cryptoPricesPrevious.week = await getCryptoPrice(7, cryptoID)
        cryptoPricesPrevious.month = await getCryptoPrice(30, cryptoID)
        cryptoPricesPrevious.threeMonths = await getCryptoPrice(90, cryptoID)
        cryptoPricesPrevious.year = await getCryptoPrice(365, cryptoID)
        setCryptoPrices(cryptoPricesPrevious)

        const datesPrevious = {}
        datesPrevious.week = getDates(7)
        datesPrevious.month = getDates(30)
        datesPrevious.threeMonths = getDates(90)
        datesPrevious.year = getDates(365)
        setDates(datesPrevious)

        
        const maxValue = Math.max(...cryptoPricesPrevious.year)
        const minValue = Math.min(...cryptoPricesPrevious.year)
        
        data.maxValue = {
            price: maxValue,
            date: datesPrevious.year[cryptoPricesPrevious.year.indexOf(maxValue)]
        }
        data.minValue = {
            price: minValue,
            date: datesPrevious.year[cryptoPricesPrevious.year.indexOf(minValue)]
        }

        setCryptoData(data)
    }

    React.useEffect(() => {

        effectHandler()
        
    }, [])

    React.useEffect(() => {

        if (cryptoData) {

            setLoadingURL(cryptoData.image.small)
        }

        if (cryptoData && cryptoPrices && dates) {

            setLoading(false)
        }

    }, [cryptoData, cryptoPrices, dates])

    React.useEffect(() => {

        if (loading) {
    
          document.body.style.overflow = "hidden"
        
        } else {
    
          setTimeout(() => {
            
            document.body.style.overflow = "visible"
            setContentLoaded(true)
          }, 2000);
          
        } //https://stackoverflow.com/questions/39962757/prevent-scrolling-using-css-on-react-rendered-components
      }, [loading])

    return (
        <>
            {
                !contentLoaded ? 
                    <Loading loading={loading} loadingURL={loadingURL}/>
                : null
            }
            {
                loading ? null :   
                <CryptoStyles container columnSpacing={2}>
                    <Grid item md={4} sm={12} xs={12}>
                        <header>
                            <img src={cryptoData.image.small} alt="crypto" />
                            <h1>{cryptoData.name}</h1>
                        </header>
                        <CryptoPricesModule
                            text="Highest value (Last year)"
                            price={cryptoData.maxValue.price}
                            date={cryptoData.maxValue.date}
                            Styles={StylesCryptoPricesModule}
                        />
                        <CryptoPricesModule
                            text="Lowest value (Last year)"
                            price={cryptoData.minValue.price}
                            date={cryptoData.minValue.date}
                            Styles={StylesCryptoPricesModule}
                        />
                        <BackToTheGalleryStyles
                            variant="contained"
                            onClick={() => window.location = '../../'}
                            sx={{
                                // width: "100%",
                                margin: "0px 0px 0px 1vw"
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-left" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <line x1="5" y1="12" x2="9" y2="16" />
                            <line x1="5" y1="12" x2="9" y2="8" />
                            </svg>
                            Back to the gallery
                        </BackToTheGalleryStyles>
                    </Grid>
                    <Grid item md={8} sm={12} xs={12}>
                        <Line
                            data={{
                                labels: dates[lineDatesInterval],
                                label: false,
                                datasets: [
                                    {
                                        data: cryptoPrices[lineDatesInterval],
                                        borderColor: "#fff",
                                        pointRadius: (linePoints ? 4 : 0),
                                    }
                                ]
                            }}
                            options={{
                                responsive: true,
                                maintainAspectRatio: true,
                                aspectRatio: 1.8,
                                scales: {
                                x: {
                                    grid: {
                                    color: 'rgba(253, 91, 91, 0)',
                                    borderColor: 'rgba(187, 187, 187, 0)',
                                    opacity: 0
                                    },
                                    ticks: {
                                    color: "#fff"
                                    }
                                },
                                y: {
                                    grid: {
                                    color: 'rgba(253, 91, 91, 0)',
                                    borderColor: 'rgba(187, 187, 187, 0)',
                                    opacity: 0
                                    },
                                    ticks: {
                                    color: "#fff"
                                    }
                                }
                                },
                                plugins: {
                                    plugin,
                                    legend: {
                                        display: false, // https://stackoverflow.com/a/67055974
                                        labels: {
                                        fontColor: '#666'
                                        }
                                    }
                                },
                            }}
                            className='line'
                        />
                        <Box
                            sx={{display: 'flex', justifyContent: "space-around", padding: {md: "1.5vh 4vw", xs: "1vh 13vw 5vh 13vw"}}}
                        >
                            {
                                [
                                    {text: "Week", propierty: "week"}, 
                                    {text: "Month", propierty: "month"},
                                    {text: "Three months", propierty: "threeMonths"},
                                    {text: "Year", propierty: "year"}
                                ].map((obj) => (

                                    <CryptoButtonModule
                                        Styles={StylesCryptoButtonModule}
                                        text={obj.text}
                                        onClickFunction={setLineDatesInterval}
                                        value={obj.propierty}
                                        key={obj.text}
                                    />
                                ))
                            }
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={linePoints}
                                        defaultChecked={true}
                                        onChange={() => {
                                
                                            setLinePoints(!linePoints)}}
                                        color="secondary"
                                    />
                                }
                                label="Line Points"
                                sx={{color: "#fff"}}
                            />
                        </Box>
                    </Grid>
                </CryptoStyles>
            }
        </>
    )
};

export default Crypto;