import React, {useState} from 'react';
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

  const {register, handleSubmit, errors} = useForm();

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

    if(data.rate <0 || data.rate >5 ) {
      console.log("you are not a valid input. go away!")
      alert("Please input rating between 1 and 5")
    }
    if(userInfo === undefined ||  userInfo === null ) {
      console.log("you are not logged in, go login or register.")
      alert("you are not logged in, go login or register.")
    }


      (data.rate >= 0 && data.rate <= 5  && (userInfo != undefined))&& await axios.post('http://3.134.99.157:10000/review',{

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
            
            alert("you successfully added a review.")
            console.log("succefully submitted your review!", response.data)
            window.location.reload(true);
          })
          .catch((err)=>{console.log(err)})
    }


  return (
        <Container component="main" maxWidth="xs">
          <CssBaseline/>
          <div className={classes.paper}>

            <Typography component="h1" variant="h4">
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
                      inputRef={register()}
                      fullWidth
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
                      fullWidth
                  />
                </Grid>
              </Grid>
              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  style={{backgroundColor:"#ff914d"}}
              >
                Submit
              </Button>

            </form>
          </div>
        </Container>
    );
  }


