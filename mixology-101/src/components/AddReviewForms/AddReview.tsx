import React, {SyntheticEvent, useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {mixologyAddReview} from "../../remote/mixology-functions";
import {Review} from "../../models/Review";


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


export const addRevieForm: (props: any) => void = (props) => {
  const classes = useStyles();
  const [description, changDescription] = useState("")
  const [rate, changeRating] = useState("")

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
    changDescription(e.target.value)
    console.log(e.target.value)
  }

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
    changeRating(e.target.value)
    console.log(e.target.value)
  }


  const submitAddReview = async (e: SyntheticEvent) => {
    e.preventDefault() // prevent default button functionality to refresh page

    try {
      let newReview = await mixologyAddReview(description, rate, 1, 1)
      console.log(newReview)
      props.updateCurrentReview(newReview)
      console.log(newReview)
    } catch (e) {
      console.log(e.message)
    }
  }

    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline/>
          <div className={classes.paper}>

            <Typography component="h1" variant="h5">
              Add Review
            </Typography>
            <form className={classes.form} noValidate onSubmit={submitAddReview}>
              <Grid container spacing={2}>

                <Grid item xs={12}>
                  <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="rating"
                      label="Rating"
                      name="rating"
                      autoComplete="rating"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="description"
                      label="Description"
                      type="description"
                      id="description"
                      autoComplete="description"
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

