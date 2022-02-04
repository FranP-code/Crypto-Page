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
                marginTop: "3vh",
                width: "100%",
            
                paddingTop: "4vh",
                paddingBottom: "4vh",
                paddingLeft: "3vw",
            
                boxSizing: "border-box",

                backgroundColor: "#00000036"
            }}
        >
            Made with 💓 by <a style={{color: "#1f5ebd"}} href="https://porfolio-franp.netlify.app" rel="noreferrer" target="_blank">Francisco Pessano</a>
        </footer>
    )
}

export default Footer
