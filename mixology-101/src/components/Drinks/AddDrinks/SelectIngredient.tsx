import React, { useEffect, useState } from "react"
import { DataGrid, ColDef } from '@material-ui/data-grid';
import axios from "axios";

//import { newDrink } from "./AddDrink";
import { addRecipe } from "../../../remote/mixRemote/mixRemoteFunc";

export let newDrinkIngredients: number;


const columns: ColDef[] = [
    //{ field: 'id', headerName: 'ID', width: 80 },
    {
      field: 'name',
      headerName: 'Ingredient name',
      width: 180,
     },
];

 export const SelectIngredient:React.FunctionComponent<any>  = () =>{
     
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
                return(setSelection(newSelection.rowIds))
               // addRecipe(newSelection.rowIds, newDrink.id )
                //console.log(addRecipe(newSelection.rowIds, newDrink.id ))
                } 
            }
             />
        </div>
      
    </>
    )
}

