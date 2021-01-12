import React from 'react'
import {DrinkBody} from './DrinkBody'
import MainHeader from '../MainPageComponents/MainHeader'
import MainFooter from '../MainPageComponents/MainFooter'


const DrinkMain = ()=>{

    return(
        <div>
            <MainHeader />
            <DrinkBody />
            <MainFooter />
        </div>
        
    )
}

export default DrinkMain