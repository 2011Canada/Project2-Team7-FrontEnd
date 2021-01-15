import React from 'react'


const style = {

   
  button :{
    position: "absolute",
    transform: "Translate(-45%, -50%)",
    top:"45%",
    left: "50%",
    padding: "1rem 2rem",
    fontFamily: "Yusei Magic",
    borderRadius: "18px",
    background: "#e0e0e0",
    boxShadow:  "20px 20px 60px #b1a247, -20px -20px 60px #efdc5f",
    textDecoration: "none",
    color: "#525316",
    cursor: "pointer",
    borderBottom: "3px solid #383002"
  }
}

const Index = ()=>{
     return(
    <div  id="mixologyButton" style={{height:"100vh",backgroundImage:"url('./creators.png')", backgroundSize:"cover"}}>

      <a className="button" href={'/home'} style={style.button}>Mixology 101</a>

    </div>
    )

}

export default Index

