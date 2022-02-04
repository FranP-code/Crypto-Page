import React, { useState } from 'react';

import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

import { Chart as ChartJS } from 'chart.js/auto'
import { Chart, Line }            from 'react-chartjs-2' //WTF https://stackoverflow.com/questions/67727603/error-category-is-not-a-registered-scale
import Cookies from 'js-cookie';
import { borderRadius } from '@mui/system';

import { withRouter, useHistory } from 'react-router-dom';

const CryptoGalleryItem = ({CryptoStyles, data, cryptoPrices, dates, index, cryptoListLength, setLoading, loading}) => {

  const history = useHistory()

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

  const [backgroundColor, setBackgroundColor] = useState("#ffffff0")

  React.useEffect(() => {

    // (cryptoPrices[data.id].prices)

    if (!cryptoPrices[data.id]) {

      console.log('ERROR, PRICE ID IS DIFFERENT TO CRYPTO ID')
      console.log(data)
      console.log(cryptoPrices)
    }

    if (index === cryptoListLength - 1){ setLoading(false)  }

  }, [])

  return (
    <>
      <CryptoStyles
        item
        lg={4}
        md={6}
        sm={12}
        style={{cursor: loading ? 'initial' : 'clicker'}}
      >
        <Card className="card" onClick={() => {if (!loading) history.push(`/crypto/${data.id}`)}}>
          <CardContent
            className="container"  
          >
            <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center", paddingTop: "2vh"}}>
              <Typography
                variant="h4"
                fontWeight="bold"
                fontFamily="Raleway"
                color="#fff"
                height="10vh"
                width="100%"
                sx={{display: "flex", alignItems: "center"}}
                paddingRight="10px"
              >
                  {data.name}
              </Typography>
              <CardMedia
                component="img"
                sx={{ width: "10vh", height: "10vh"}}
                image={data.image}
                alt={`${data.id} img`}
                />
            </Box>
            <Line
                data={{
                    labels: dates,
                    label: false,
                    datasets: [
                        {
                            data: cryptoPrices[data.id].prices,
                            // pointRadius: 0,
                            borderColor: "#fff"
                        }
                    ]
                }}
                options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    aspectRatio: 1.5,
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
                className="line"
                style={{backgroundColor: backgroundColor, boxSizing: "content-box", transition: "all 0.4s ease-in-out", borderRadius: "3px"}}
                onMouseEnter={() => setBackgroundColor("#ffffff1a")}
                onMouseLeave={() => setBackgroundColor("transparent")} // https://stackoverflow.com/questions/8739665/is-background-colornone-valid-css
            />
            <Typography
              variant="h6"
              color="text.secondary"
              fontWeight="medium"
              align="center"
              padding="5.5vh 0px"
              marginBottom="8vh"
              fontFamily="Raleway"
              color="#eee"
            >
                Last 7 days
            </Typography>
          </CardContent>
        </Card>
      </CryptoStyles>
    </>
  )
};

export default withRouter(CryptoGalleryItem);
