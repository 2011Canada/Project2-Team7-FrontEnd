import React, {Component, Props, SyntheticEvent, useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { useForm } from "react-hook-form";


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

export const AddReviewForm: React.FunctionComponent<any> = () =>{

  const classes = useStyles();

  const {register, handleSubmit} = useForm();

  const submitAddReview = async (data:any) => {
    console.log(data)
    var userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    var drinkName = JSON.parse(sessionStorage.getItem("drinkName"));
    var drinkDegree = JSON.parse(sessionStorage.getItem("drinkDegree"));
    var drinkCreatorFirstName = JSON.parse(sessionStorage.getItem("drinkCreatorFirstName"));
    var drinkCreatorLastName = JSON.parse(sessionStorage.getItem("drinkCreatorLastName"));
    var drinkCreatorId = JSON.parse(sessionStorage.getItem("drinkCreatorId"));
    var drinkCreatorUsername = JSON.parse(sessionStorage.getItem("drinkCreatorUsername"));
    var drinkCreatorPassword = JSON.parse(sessionStorage.getItem("drinkCreatorPassword"));
    var drinkId = JSON.parse(sessionStorage.getItem("drinkId"));



    await axios.post('http://localhost:8080/review',{

      "author": {
        "firstname": userInfo.firstname,
        "id": userInfo.id,
        "lastname": userInfo.lastname,
        "password": userInfo.password,
        "username": userInfo.username,
      },
      "description": data.description,
        "drink": {
      "degree": drinkDegree,
          "drinkCreator": {
            "firstname": drinkCreatorFirstName,
            "id": drinkCreatorId,
            "lastname":drinkCreatorLastName,
            "password": drinkCreatorPassword,
            "username": drinkCreatorUsername
      },
      "id": drinkId,
          "name": drinkName.name
    },
      "id": 0,
        "rate": data.rate

    })
        .then((response)=>{
          console.log("succefully submitted your review!", response.data)
        })
        .catch((err)=>{console.log(err)})
  }

    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline/>
          <div className={classes.paper}>

            <Typography component="h1" variant="h5">
              Add Review
            </Typography>
            <form className={classes.form} noValidate onSubmit={ handleSubmit(submitAddReview)}>
              <Grid container spacing={2}>

                <Grid item xs={12}>
                  <TextField
                      variant="outlined"
                      id="rate"
                      label="Rating"
                      name="rate"
                      autoComplete="rate"
                      inputRef={register}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                      variant="outlined"
                      name="description"
                      label="Description"
                      type="description"
                      id="description"
                      autoComplete="description"
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
                Submit
              </Button>

            </form>
          </div>
        </Container>
    );
  }

