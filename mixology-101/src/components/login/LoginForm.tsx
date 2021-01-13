import React, {SyntheticEvent, useState} from 'react'
import { Button, Grid, TextField } from '@material-ui/core'
import { Redirect } from 'react-router'
import { User } from '../../models/User'
import { login } from '../../remote/mixRemote/mixRemoteFunc'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

interface ILoginProps{
    updateCurrentUser: (u:User) => void
    currentUser:User
}


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export const LoginForm: React.FunctionComponent<ILoginProps> = (props) => {
    const [username, changeUsername] = useState("")
    const [password, changePassword] = useState("")
    const classes = useStyles();

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
            window.location.reload(true);
        }catch(e){
            changePassword("")
        }
    }

    return (

        (props.currentUser) ? 
        
        <Redirect  to='/home' />
        :
        <>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
        
            <Typography component="h1" variant="h4">
                Login
            </Typography>
            <form  className={classes.form} onSubmit={submitLogin}>
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
            </div>
        </Container>
        </>
    )
}

var btnStyle = {
    margin: "0 20px 0 0"
};