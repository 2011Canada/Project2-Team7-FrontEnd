import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import React from "react"
import { useForm } from "react-hook-form";

export const AddIngredient:React.FunctionComponent<any> = ()=>{

    const {register, handleSubmit} = useForm();

    const SubmitIngredient = async (data:any)=> {
        console.log(data)
        await axios.post('http://localhost:8080/ingredients',
        {
            "id": 0,
            "name": data.name,
        })
        .then((response)=>{
            window.location.reload(true);
            console.log("New ingredient added into the db", response.data)
        })
        .catch((e)=>{
            console.log(e)
        })
        }

    return(
        <>  
            <form onSubmit = {handleSubmit(SubmitIngredient)} >
            <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                id="name"
                label="Ingredient Name"
                autoFocus
                fullWidth
                inputRef = {register}
              />
            <Button type="submit"  variant="contained" color="primary" fullWidth>
                    Add Ingredient
            </Button> 
            </form>
        </>
    )
}

