import React from 'react'
import { Redirect } from 'react-router'



export class Logout extends React.Component  {
    async componentDidMount() {
        sessionStorage.clear()
        window.location.reload(true);
    }
   
    render(){
        return (
            <Redirect  to='/home' />
        );
    
    }
    
}
