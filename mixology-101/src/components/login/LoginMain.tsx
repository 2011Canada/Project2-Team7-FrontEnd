import React, {useState} from 'react'
import {LoginForm} from './LoginForm'
import MainHeader from '../MainPageComponents/MainHeader'
import MainFooter from '../MainPageComponents/MainFooter'
import { User } from '../../models/User';

const LoginMain = ()=>{
    const [user, changeUser] = useState<User>()
    return(
        <div>
            <MainHeader />
            <LoginForm currentUser={user} updateCurrentUser={changeUser} />
            <MainFooter />
        </div>
        
    )
}

export default LoginMain