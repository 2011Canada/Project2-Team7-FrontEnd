import React, { Component } from 'react';
import Wave from 'react-wavify'

const footer=  {
        position:"sticky" as "sticky",
        bottom: "0",
        height:"5vh",
        width: "100%",
        // borderTop: "1px double #ff914d"
    }

    const items = ["1", ]

const MainFooter = ()=>{

    return(

        <footer className="bg-light text-dark text-center text-lg-start" style={footer}>
             <a className="text-dark badge" href={"/"} style={{fontSize:"20px"}}> Mixology.com&#169;</a>
            <Wave fill='#ff914d'
            paused={false}
            options={{
            height: 1,
            amplitude: 50,
            speed: 0.10,
            points: 3,
            }}
            />
        </footer>

       

        
    )

}

export default MainFooter