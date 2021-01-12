import React from 'react'
import { Redirect } from 'react-router'



export class Logout extends React.Component  {
    async componentDidMount() {
        sessionStorage.clear()
    }
   
    render(){
        return (
            <Redirect  to='/home' />
        );
    
    }
    
}
