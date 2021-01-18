import { Button } from "@material-ui/core";
import axios from "axios";
import React from "react"
import { useForm } from "react-hook-form";



export const AddRecipe:React.FunctionComponent<any> = () =>{

    const {register, handleSubmit}= useForm();

    let drinkName = JSON.parse(sessionStorage.getItem("drinkName"));
    let drinkDegree = JSON.parse(sessionStorage.getItem("drinkDegree"));
    let drinkCreatorFirstName = JSON.parse(sessionStorage.getItem("drinkCreatorFirstName"));
    let drinkCreatorLastName = JSON.parse(sessionStorage.getItem("drinkCreatorLastName"));
    let drinkCreatorId = JSON.parse(sessionStorage.getItem("drinkCreatorId"));
    let drinkCreatorUsername = JSON.parse(sessionStorage.getItem("drinkCreatorUsername"));
    let drinkCreatorPassword = JSON.parse(sessionStorage.getItem("drinkCreatorPassword"));
    let drinkId = JSON.parse(sessionStorage.getItem("drinkId"));
    let ingredientId = JSON.parse(sessionStorage.getItem("ingredientId"))
    let ingredientName = JSON.parse(sessionStorage.getItem("ingredientName"))
   

    const submitRecipe = async (data:any)=> {
        console.log(data)
        await axios.post('http://3.134.99.157:10000/ingredients/recipe',{
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
        "ingredient": {
        "id": ingredientId,
        "name": ingredientName,
        },
        "recipeId": 0
    })
    .then((res)=>{
        console.log("new recuipe saved", res.data)
    })
    .catch((e)=>{
        console.log(e)
    })
    }
    

    return(

       <form onSubmit = {handleSubmit(submitRecipe)}> 
            <Button type="submit"  variant="contained" color="primary" fullWidth>
                Add new Recipe
            </Button> 
       </form>
    )
}