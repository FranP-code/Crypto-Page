import { Card, CardContent, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';

const CryptoPricesModule = ({text, price, date, Styles}) => {
    
    return (

        <Styles>
            <Card className="card">
                <CardContent>
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        fontFamily="Raleway"
                        color="#fff"
                    >
                        {text}
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText
                                primary={`USD ${Math.round(price * 100) / 100}`} //https://stackoverflow.com/a/11832950
                                primaryTypographyProps={{
                                    color: '#eee'
                                }}
                                secondary={date}
                                secondaryTypographyProps={{
                                    color: '#ddd'
                                }}
                            />
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        </Styles>
    )
};

export default CryptoPricesModule;
