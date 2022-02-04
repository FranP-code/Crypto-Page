import React from 'react'

/**
 * 
 * .made-with-love a {
    color: #f7f7f7
  }
  
  .made-with-love {
    color:rgb(185, 185, 185);
    margin-top: auto;
    width: 100%;

    padding-top: 5vh;
    padding-bottom: 5vh;
    padding-left: 3vw;

    box-sizing: border-box;
  }

.made-with-love.dark-mode-component {

  background-color: $main-color-dark;
}
 */

const Footer = () => {
    return (
        <footer
            style={{

                fontFamily: "Raleway",
                color:"#fff",

                display: "flex",
                alignItems: "center",
                
                width: "100%",
                height: "10vh",
                
                paddingLeft: "3vw",
                
                marginTop: "3vh",
                
                boxSizing: "border-box",

                backgroundColor: "#00000036"
            }}
        >
            Made with 💓 by <a style={{color: "#fff023", marginLeft: "5px"}} href="https://porfolio-franp.netlify.app" rel="noreferrer" target="_blank">Francisco Pessano</a>
        </footer>
    )
}

export default Footer
