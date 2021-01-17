import React from 'react';
import { mixologyClient } from ".."


export const login = async (username:string, password:string) => {
//   let credentials = {
//         username,
//         password
//     }  

    try{

        let res = await mixologyClient.post('/user/login/'+ username + '/' + password) //, credentials)
       // console.log("aa: " + res.data.username);
        if(res.data.username === undefined) alert("USERNAME AND PASSWORD IS NOT VALID")
        return res.data
    }catch(e){
        console.log(e);
        if(e.response){
            throw new Error(e.response.data)
        } else {
            throw new Error("CANNOT LOGIN")
        }
        
    }

}


export const reviewList = async (drinkId:any) => {

    try{
        let res = await mixologyClient.get('/review/' + drinkId) 
        return res.data
    }catch(e){
        console.log(e)
        if(e.response){
            throw new Error(e.response.data)
        } else {
            throw new Error("CANNOT VIEW")
        }
        
    }

}


export const drinkInfoByName = async (drinkName:any) => {

    try{
        let res = await mixologyClient.get('/drinks/drinkName/' + drinkName) 
        // console.log("drinkInfo:" + res.data)
        return res.data
    }catch(e){
        console.log(e)
        if(e.response){
            throw new Error(e.response.data)
        } else {
            throw new Error("CANNOT FIND DRINK INFORMATION")
        }
        
    }

}


export const drinkInfoById = async (drinkId:any) => {

    try{
        let res = await mixologyClient.get('/drinks/find/' + drinkId) 
       // console.log("drinkInfo:" + res.data)
        return res.data
    }catch(e){
        console.log(e)
        if(e.response){
            throw new Error(e.response.data)
        } else {
            throw new Error("CANNOT FIND DRINK INFORMATION")
        }
        
    }

}


export const ingredientsList = async (drinkId:any) => {

    try{
        let res = await mixologyClient.get('/ingredients/drink/' + drinkId) 
        return res.data
    }catch(e){
        console.log(e)
        if(e.response){
            throw new Error(e.response.data)
        } else {
            throw new Error("CANNOT FIND INGREDIENTS LIST")
        }
        
    }

}


export const getIngredients = async () => {

    try{
        let res = await mixologyClient.get('/ingredients') 
        return res.data
    }catch(e){
        console.log(e)
        if(e.response){
            throw new Error(e.response.data)
        } else {
            throw new Error("CANNOT FIND INGREDIENTS LIST")
        }
        
    }
}


export const drinkInfo = async (drinkName:any) => {

    try {
        let res = await mixologyClient.get('/drinks/drinkName/' + drinkName)
        console.log(res.data)
        return res.data
    } catch (e) {
        console.log(e)
        if (e.response) {
            throw new Error(e.response.data)
        } else {
            throw new Error("CANNOT LOGIN")
        }

    }
}
export const mixologyAddReview = async ( description:string, rate:number , userid:number, drinkid:number) =>{
    let credentials ={
        "id"  : 0 ,
        "userid": `${userid}`,
        "description" : `${description}`,
        "rate" : `${rate}`,
        "drinkid" : `${drinkid}`
    }
    try{
        let res = await mixologyClient.post('/review', credentials)//.then((response)=> console.log(response.data))
        console.log(res.data)
        console.log(res)

        return res.data
    }catch(e){
        console.log(e);
        if(e.response){
            throw new Error(e.resonse.data)
        }else{
            throw new Error("OOPs something else went wrong ")
        }
    }
}

export const recommendLists = async () => {

    try{
        var returnList = [];
        var res;
       for(let v=32; v<35; v++){
            res = await mixologyClient.get('/drinks/find/' + v) 
            returnList.push(res.data)
       }
       res = await mixologyClient.get('/drinks/find/36') 
       returnList.push(res.data)
       
       return returnList
    }catch(e){
        console.log(e)
        if(e.response){
            throw new Error(e.response.data)
        } else {
            throw new Error("CANNOT FIND INGREDIENTS LIST")
            console.log("cannot find ingr list")
        }
        
    }

}
