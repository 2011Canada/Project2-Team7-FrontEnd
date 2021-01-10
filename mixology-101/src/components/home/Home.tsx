import React from 'react'

const currentUser = JSON.parse(localStorage.getItem('userInfo'));

export const Home: React.FunctionComponent = () => {
   // console.log("curruentUser: " + currentUser)
    return (
        <div>
             <p>id: {currentUser.id}</p>
             <p>username: {currentUser.username}</p>
             <p>password: {currentUser.password}</p>
             <p>firstname: {currentUser.firstname}</p>
             <p>lastname: {currentUser.lastname}</p>
        </div>
       
    )
}