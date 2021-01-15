import React, { Component } from 'react';

const footer=  {
        position:"absolute" as "absolute",
        bottom: "0",
        width: "100%"
    }

const MainFooter = ()=>{

    return(

        <footer className="bg-dark text-light text-center text-lg-start" style={footer}>
            <div className="text-center p-3 text-dark" >
                <a className="text-light" href="#!"> Mixology.com </a>
            </div>
        </footer>
    )

}

export default MainFooter