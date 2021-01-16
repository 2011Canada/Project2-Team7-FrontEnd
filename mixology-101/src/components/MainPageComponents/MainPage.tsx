import React, { useState } from 'react'
import MainBody from './MainBody'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'


const MainPage = ()=>{

    const[myDrink, setDrink] = useState('')
    
    return(
        <div>
            <MainHeader setDrink={setDrink}/>
            <MainBody myDrink={myDrink}/>
            <MainFooter />
        </div>
        

    )


}

export default MainPage