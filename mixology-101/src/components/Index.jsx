import React from 'react'


const style = {

   
  button :{
    position: "absolute",
    transform: "Translate(-50%, -80%)",
    left: "50%",
    top:"80%",
    height:"50px",
    width:"250px",
    padding: "1rem 2rem",
    fontFamily: "Yusei Magic",
    borderRadius: "18px",
    background: "#e0e0e0",
    boxShadow:  "20px 20px 60px #444442, -20px -20px 60px #dfddd0",
    textDecoration: "none",
    color: "#525316",
    cursor: "pointer",
    borderBottom: "3px solid #383002",
    borderLeft: "1px solid #383002"
  }
}

const Index = ()=>{
     return(
    <div  id="mixologyButton" style={{height:"100vh",backgroundImage:"url('./creators.png')", backgroundSize:"contain", backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>

      <a className="button badge" href={'/home'} style={style.button}>Mixology 101 • Drink Responsibly</a>

    </div>
    )

}

export default Index

