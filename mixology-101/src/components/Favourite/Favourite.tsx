import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { useForm } from "react-hook-form";
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Icon} from "@material-ui/core";

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

export const FavouriteForm: React.FunctionComponent<any> = () =>{

    const classes = useStyles();

    const {handleSubmit} = useForm();

    const submitFavourite = async (data:any) => {
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


     !userInfo && alert("Please Login")
     userInfo && await axios.post('http://localhost:8080/user/addFavorite',{

            "drink": {
            "degree": drinkDegree,
                "drinkCreator": {
                "firstname": drinkCreatorFirstName,
                    "id": drinkCreatorId,
                    "lastname": drinkCreatorLastName,
                    "password": drinkCreatorPassword,
                    "username": drinkCreatorUsername
            },
            "id": drinkId,
                "name": drinkName
        },
            "favoriteId": 0,
            "user": {
            "firstname": "string",
                "id": userInfo.id,
                "lastname": userInfo.lastname,
                "password": userInfo.password,
                "username": userInfo.username
            }

        })
            .then((response)=>{
                alert("Added to favourites")
                console.log("succefully submitted your favorite drink!", response.data)
            })
            .catch((err)=>{
               alert("Please Login to add to Favorite")
            })

    }

    return (
        <div id="heart" style={{width:"30px", height:"30px"}}>
            <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <form className={classes.form} noValidate onSubmit={ handleSubmit(submitFavourite)}>
                    <Button type="submit">
                      <i className="fa fa-heart fa-3x text-danger"></i>
                    </Button>
                    <p className="mx-3">Fav!</p>
                </form>
            </div>
        </Container>
        </div>
    );
        
        
        
}

