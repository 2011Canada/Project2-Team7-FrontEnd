import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import React from "react"
import { useForm } from "react-hook-form";




     const  formParent = {
            padding:"1em",
            backgroundColor:"white",
            margin: "1em",
            borderRadius: "18px",
        // background: "#36352d",
            boxShadow:  "20px 20px 60px #ffffff, -20px -20px 60px #161614",
        }
    

export const AddIngredient:React.FunctionComponent<any> = ()=>{

    const {register, handleSubmit} = useForm();

    const SubmitIngredient = async (data:any)=> {
        console.log(data)
        await axios.post('http://3.134.99.157:10000/ingredients',
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
        
        <div style={formParent} className="row">
            <div className="col-12">
                 <form style={{}} className = "p-3" onSubmit = {handleSubmit(SubmitIngredient)} >
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
            <Button style= {{backgroundColor:"#ff914d"}} type="submit"  variant="outlined"  fullWidth>
                    Add Ingredient
            </Button> 
            </form>
            </div>
        </div>
           
    
    )
}

