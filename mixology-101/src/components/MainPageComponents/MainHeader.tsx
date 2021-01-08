import React, { Component, useState} from 'react';

const logoStyle = {
  width: '4.5rem',
  height: '4.5rem',
  borderRadius: '50%',
  padding: '5px'
}

const MainHeader = ()=>{


  const [user, setUser] = useState(null)











    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-logo"  href="#"><img style={logoStyle} src="logo2.png" alt="Image showing logo"/></a>
      <a className="navbar-brand" href="#">Mixology<sup>101</sup></a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">Register</a>
          </li>
        </ul>
        
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Find a drink" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>

      </div>
   

    </nav>

    )

}

export default MainHeader