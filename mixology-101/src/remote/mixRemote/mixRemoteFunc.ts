import { mixologyClient } from "."


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