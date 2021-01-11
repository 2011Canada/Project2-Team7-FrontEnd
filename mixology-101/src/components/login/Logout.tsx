import React from 'react'
import { Redirect } from 'react-router'



export const Logout: React.FunctionComponent = () => {
    sessionStorage.clear()
    return (
        <Redirect  to='/home' />
    )

}
