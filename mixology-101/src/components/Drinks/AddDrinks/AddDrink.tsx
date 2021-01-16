import { Button, TextField } from "@material-ui/core";
import { ColDef, DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import MainHeader from "../../MainPageComponents/MainHeader";
import { AddIngredient } from "./AddIngredient";

const columns: ColDef[] = [
    //{ field: 'id', headerName: 'ID', width: 80 },
    {
      field: 'name',
      headerName: 'Ingredient name',
      width: 180,
     },
];

export const CreateDrink: React.FunctionComponent<any> = () =>{

    const {register, handleSubmit} = useForm();

    const [select, setSelection] = React.useState([]);
    const [ingredients, setIngredients] = useState([])
    const getIngredients = async ()=>{
        const response = await axios.get('http://localhost:8080/ingredients').catch((err)=>{console.log(err)})
    
        if (response && response.data){
            setIngredients(response.data)
            //console.log(response.data)
            ingredients.push(response.data)
            console.log(ingredients)
            return ingredients    
        }
    }     

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
            console.log("New drink added into the Database", response.data)
            return(response.data)
        })
        .catch((e)=>{
            console.log(e)
        })
    }

    const submitRecipe = async (ingredientId, ingredientName, data:any) =>{
        await axios.post('http://localhost:8080/ingredients/recipe',{
        "drink": {
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
        },
        "ingredient": {
        "id": ingredientId,
        "name": ingredientName,
        },
        "recipeId": 0
    })
    .then((res)=>{
        console.log("new recipe saved", res.data)
    })
    .catch((e)=>{
        console.log(e)
    })
    }
    

    useEffect(()=>{
        getIngredients();
    }, [])

        /*
        <div>
            <MainHeader/>
        </div>
        */
    return(
    <>
        
        <div>
        
            <AddIngredient/>
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
                <div style={{ height: 400, width: "100%" }}>

                    <h1>{select.map((val)=> val.id)}</h1>
                    <DataGrid 
                        
                        rows={ingredients} 
                        columns={columns} 
                        pageSize={5}  
                        checkboxSelection 
                        onSelectionChange = {(newSelection)=>{
                            setSelection(newSelection.rowIds)
                            let ingId = newSelection.rowIds
                            //let ingName = setSelection(newSelection.rowIds)
                            console.log(ingId)
                            submitRecipe(ingId, ingId, {register})
                            console.log((newSelection.rowIds))
                            //newSelection.rowIds = {register}
                            return(setSelection(newSelection.rowIds))
                            } 
                        }
                    />
            
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
            
        </div>
        
    </>
    )
}
