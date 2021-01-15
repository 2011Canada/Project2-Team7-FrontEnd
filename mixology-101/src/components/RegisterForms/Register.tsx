import React, {  } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { useForm } from "react-hook-form";
import MainHeader from '../MainPageComponents/MainHeader';

import { Route } from 'react-router';
import { Link as RLink } from 'react-router-dom';
function Copyright() {
  return (
    <>
    <Route path ="/home"/>
      
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <RLink color="inherit" to = "/home">
        Mixology-101
      </RLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </>
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

export const RegisterForm: React.FunctionComponent<any> = () =>{
  const classes = useStyles();
  const setDrink = '';
 const {register, handleSubmit} = useForm();


 const submitRegister = async (data:any)=>{
 
     console.log(data)
      await axios.post('http://localhost:8080/user',{
         "firstname": data.firstname,
         "id": 0,
         "lastname": data.lastname,
         "password": data.password,
         "username": data.username
      })
      .then((response)=>{
         console.log("succefully registered!", response.data)
         
      })
      .catch((err)=>{console.log(err)})
 }

 
  return (
  
  <>
    <MainHeader setDrink={setDrink}/>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h4">
          Register
        </Typography>
        <form className={classes.form} onSubmit ={handleSubmit(submitRegister)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstname"
                variant="outlined"
                required
                fullWidth
                id="firstname"
                label="First Name"
                autoFocus
                inputRef = {register}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastname"
                label="Last Name"
                name="lastname"
                autoComplete="lastname"
                inputRef={register}
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
                autoComplete="username"
                inputRef={register}
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
                autoComplete="current-password"
                inputRef={register}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Route path = "/home"/> 
              <RLink to = "/home" >
                Already have an account? Sign in
              </RLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={4}>
        <Copyright />
      </Box>
    </Container>
  </>
  );
}










