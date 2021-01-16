import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
// import { addRecipe } from "../../../remote/mixRemote/mixRemoteFunc";
import MainHeader from "../../MainPageComponents/MainHeader";
import { AddIngredient } from "./AddIngredient";
import { SelectIngredient } from "./SelectIngredient";

export let newDrink = {   
    "degree": "",
    "drinkCreator": {
    "firstname": "",
    "id": 0,
    "lastname": "",
    "username": "",
    "password": "",
    },
    "id": 0,
    "name": "",
}

export const CreateDrink: React.FunctionComponent<any> = () =>{

    const {register, handleSubmit} = useForm();


   
    // var userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    console.log(userInfo)
    const submitDrink = async (data:any)=> {
        console.log(data)
        await axios.post('http://localhost:8080/drinks',
        {
            "degree": data.degree,
            "drinkCreator": {
                "firstname": userInfo.firstname,
                "id": userInfo.id,
                "lastname": userInfo.lastname,
                "username": userInfo.username,
                "password": userInfo.password,
            },
            "id": 0,
            "name": data.name,
        })
        .then((response)=>{
            console.log(userInfo)
            newDrink = response.data 
            console.log("New drink added into the Database", response.data)
            return(newDrink)
        })
        .catch((e)=>{
            console.log(e)
        })
        }
    
    return(
    <>
        <div>
            <MainHeader setDrink={{}}/>
        </div>
        <div>
            <form onSubmit = {handleSubmit(submitDrink)} >
            
            <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                id="name"
                label="Drink Name"
                autoFocus
                inputRef = {register}
                margin = "normal"
                fullWidth
              />
              <TextField
                id="degree"
                label="alcohol %"
                type="number"
                fullWidth
                name="degree"
                variant="outlined"
                required        
                inputRef = {register}
                margin = "normal"
                />
                <div>
                <SelectIngredient/>
                
                </div>
              <Button
                type="submit"   
                    variant="contained"
                    color="primary"
                    //className={classes.submit}
                >
                     Create Drink
                </Button>
            </form>
            <AddIngredient/>
        </div>
        
    </>
    )
}
