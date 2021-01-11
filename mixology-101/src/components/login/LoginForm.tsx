import React, {SyntheticEvent, useState} from 'react'
import { Button, Grid, TextField } from '@material-ui/core'
import { Redirect } from 'react-router'
import { User } from '../../models/User'
import { login } from '../../remote/mixRemote/mixRemoteFunc'


interface ILoginProps{
    updateCurrentUser: (u:User) => void
    currentUser:User
}


export const LoginForm: React.FunctionComponent<ILoginProps> = (props) => {
    const [username, changeUsername] = useState("")
    const [password, changePassword] = useState("")
    

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeUsername(e.target.value)
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changePassword(e.target.value)
    }

   
    const submitLogin = async (e:SyntheticEvent) => {
        
        e.preventDefault()
        
        try {
            let user = await login(username, password)
            //console.log("user: " + user.username);
            //console.log("firstname: " + user.firstname);
            props.updateCurrentUser(user)
            sessionStorage.setItem("userInfo", JSON.stringify(user))
        }catch(e){
            changePassword("")
        }
    }

    return (

        (props.currentUser) ? 
        
        <Redirect  to='/home' />
        :
        <form onSubmit={submitLogin}>
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
                spacing={2}
            >
                <Grid item>
                    <TextField value={username} onChange={handleUsernameChange} id="username" label="Username" variant="outlined" autoComplete="off" />
                </Grid>
                <Grid item>
                    <TextField value={password} onChange={handlePasswordChange} id="password" label="Password" variant="outlined" type="password" />
                </Grid>
                <Grid item>
                    <Button type="submit" variant="outlined" style={btnStyle}>Login</Button>
                    
                    <Button type="button" variant="outlined">Register</Button>
                </Grid>
                    
            </Grid>
        </form>
    )

}

var btnStyle = {
    margin: "0 20px 0 0"
};