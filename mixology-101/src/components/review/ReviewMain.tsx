import React from 'react'
import MainHeader from '../MainPageComponents/MainHeader'
import MainFooter from '../MainPageComponents/MainFooter'
import {ViewReview} from './ViewReview'

const LoginMain = ()=>{

    return(
        <div>
            <MainHeader setDrink={''}/>
            <ViewReview />
            <MainFooter />
        </div>
        
    )
}

export default LoginMain