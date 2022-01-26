import React from 'react';

import { Card, CardContent, Grid, Typography } from '@mui/material';

import { Chart as ChartJS } from 'chart.js/auto'
import { Chart, Line }            from 'react-chartjs-2' //WTF https://stackoverflow.com/questions/67727603/error-category-is-not-a-registered-scale

const Crypto = ({CryptoStyles}) => {

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

  return (
    <>
      <CryptoStyles item md={4} sm={6} xs={12}>
        <Card className="card">
          <CardContent
            className="container"  
          >
            <Typography
              variant="h4"
              color="text.primary"
              fontWeight="bold"
              align="center"
              padding="2vh 0px 0px 0px"
              fontFamily="Raleway"
              color="#fff"
            >
                Test - Bitcoin
            </Typography>
            <Line
                data={{
                    labels: ['12-01', '13-01', '14-01', '15-01', '16-01', '17-01', '18-01', '19-01'],
                    label: false,
                    datasets: [
                        {
                            data: [21, 51, 29, 50, 80, 70, 99, 1],
                            pointRadius: 0,
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
                style={{backgroundColor: "#ffffff0"}}
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

export default Crypto;
