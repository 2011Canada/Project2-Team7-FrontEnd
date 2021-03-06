import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios'
import MainFooter from './MainFooter'
import MainBody from './MainBody'
import logo2 from './images/logo2.png'


const logoStyle = {
  width: '4.5rem',
  height: '4.5rem',
  borderRadius: '50%',
  padding: '5px'
}
  
var userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
var   isGuest = true;
  if(userInfo != null){
      isGuest = false;
  } else{
      isGuest = true;
  }


  const MainHeader = ({setDrink})=>{

  const [drinkName, setDrinkName] = useState('')
  
  const searchDrink = async (event:any)=>{
    event.preventDefault()
    //console.log("event.drinkname: " + drinkName)
    setDrink(drinkName)
  }

  let $loginBtn = null;
  let $registBtn = null;

  if (isGuest) {
      $loginBtn = (
        <li className="nav-item">
          <a className="nav-link" href="/login">Login</a>
        </li>
      )
      $registBtn = (
         <li className="nav-item">
          <a className="nav-link" href="/register">Register</a>
        </li>
      )
  } else {
      $loginBtn = (  
        <li className="nav-item">
          <a className="nav-link" href="/logout">Logout</a>
        </li>
      )
      $registBtn = null
  }

    let isHome = false;
    if(window.location.href.substring(20,) == 'home') isHome = true; 
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-logo"  href="/home"><img style={logoStyle} src={logo2} alt="Image showing logo"/></a>
      <a className="navbar-brand" href="#">Mixology<sup>101</sup></a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
          </li>
          {$loginBtn}
          {$registBtn}
        </ul>
        {isHome ? 
          <form onSubmit={searchDrink} className="form-inline my-2 my-lg-0">
          <input id="drinkname"  className="form-control mr-sm-2" type="search" placeholder="Find a drink" aria-label="Search" onChange={event => setDrinkName(event.target.value)} />
          <button style={{border:"#ff914d solid 2px"}} className="btn btn-outline- my-2 my-sm-0" type="submit">Search</button>
          </form>
          :  ''
         }
        
      </div>

    </nav>

    )

}
export default MainHeader
