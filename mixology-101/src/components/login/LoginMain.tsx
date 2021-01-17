import React, {useState} from 'react'
import {LoginForm} from './LoginForm'
import MainHeader from '../MainPageComponents/MainHeader'
import MainFooter from '../MainPageComponents/MainFooter'
import { User } from '../../models/User';

const style ={
    parent: {
        height: "100vh",
        backgroundColor: "whitesmoke"
    },

    form:{
        margin: "2em",
        padding: "1.5em"

    },

    
}

const LoginMain = ()=>{
    const [user, changeUser] = useState<User>()

    return(
        <div style={style.parent}>
            <MainHeader setDrink={''}/>
            <LoginForm currentUser={user} updateCurrentUser={changeUser} />
            <MainFooter />
        </div>
        
    )
}

export default LoginMain