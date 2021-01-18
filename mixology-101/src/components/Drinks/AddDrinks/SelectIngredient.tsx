import React, { useEffect, useState } from "react"
import { DataGrid, ColDef } from '@material-ui/data-grid';
import axios from "axios";

import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";



const columns: ColDef[] = [
    //{ field: 'id', headerName: 'ID', width: 80 },
    {
      field: 'name',
      headerName: 'Ingredient name',
      width: 180,
     },
];

 export const SelectIngredient:React.FunctionComponent<any>  = () =>{
    /*
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
        await axios.post('http://localhost:8080/ingredients/recipe',{
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
    */
     
    const [select, setSelection] = React.useState([]);
    const [ingredients, setIngredients] = useState([])
    const getIngredients = async ()=>{
        const response = await axios.get('http://3.134.99.157:10000/ingredients').catch((err)=>{console.log(err)})
    
        if (response && response.data){
            setIngredients(response.data)
            //console.log(response.data)
            ingredients.push(response.data)
            console.log(ingredients)
            return ingredients    
        }
    }     
 /*   
    const addRecipe = async ()=>{

    }
*/
    useEffect(()=>{
        getIngredients();
    }, []) // if there is an empty bracket it only runs this once on mounting
 
    return(
    <> 
        <div style={{ height: 400, width: "100%" }}>
            <h1>{select.map((val)=> val.id)}</h1>
            <DataGrid  
            rows={ingredients} 
            columns={columns} 
            pageSize={5}  
            checkboxSelection 
            onSelectionChange = {(newSelection)=>{
                setSelection(newSelection.rowIds)
                console.log((newSelection.rowIds))
                //newSelection.rowIds = {register}
                return(setSelection(newSelection.rowIds))
                } 
            }
            />
            
        </div>
      
    </>
    )
}

