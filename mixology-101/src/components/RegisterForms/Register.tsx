import React, { SyntheticEvent, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { User } from '../../models/User'
import { mixologyRegister } from '../../remote/mixology-functions';


interface IRegisterProps{
  updateCurrentUser: (u:User) => void
  currentUser:User
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Mixology-101
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
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

export const RegisterForm: React.FunctionComponent<IRegisterProps> = (props) =>{
  const classes = useStyles();
  const [firstName, changeFirstName] = useState("")
  const [lastName, changeLastName] = useState("")
  const [username, changeUsername] = useState("")
  const [password, changePassword] = useState("")

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
    changeUsername(e.target.value)
    console.log(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
    changePassword(e.target.value)
    console.log(e.target.value)

  }
  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
    changeFirstName(e.target.value)
    console.log(e.target.value)
   
  }
  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
    changeLastName(e.target.value)
    console.log(e.target.value)
  
  }

  const submitRegister = async (e:SyntheticEvent) =>{
    e.preventDefault() // prevent default button functionality to refresh page
    
    try{
      let newUser = await mixologyRegister(firstName,lastName,username,password)
      console.log(newUser)
      props.updateCurrentUser(newUser)
      console.log(newUser)
    }catch(e){
      console.log(e.message)
    }
  }
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} onSubmit ={submitRegister}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange = {handleFirstNameChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                onChange = {handleLastNameChange}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="username"
                name="username"
                onChange = {handleUsernameChange}
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange = {handlePasswordChange}
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            //onSubmit = {submitRegister}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={4}>
        <Copyright />
      </Box>
    </Container>
  );
}










