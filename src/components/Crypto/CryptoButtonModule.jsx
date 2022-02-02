import React from 'react';

const CryptoButtonModule = ({text, onClickFunction, value, Styles}) => {
    
    return (
        <Styles
            onClick={(e) => {
                e.preventDefault() 
                onClickFunction(value)

                setTimeout(() => {

                    window.scrollTo(0,document.body.scrollHeight); //https://stackoverflow.com/questions/11715646/scroll-automatically-to-the-bottom-of-the-page
                
                }, 50)
            }}
            variant="contained"
        >
            {text}
        </Styles>
    )
};

export default CryptoButtonModule;