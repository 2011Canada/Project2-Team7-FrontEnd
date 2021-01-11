import {mixologyBaseClient} from "."

export const mixologyRegister = async (firstName:string, lastName:string, username:string, password:string) =>{
    let credentials ={
       // id : 0,
        firstName,
        lastName,
        username,
        password
    }
    
    try{
        let res = await mixologyBaseClient.post('/user', credentials)
        console.log(res.data)
        return res.data
    }catch(e){
        console.log(e);
        if(e.response){
            throw new Error(e.resonse.data)
        }else{
            throw new Error("OOPs something else when wrong ")
        }
    }
}
/* also didnt reutrn a first name and last name 
let res = await mixologyBaseClient.post('/user', credentials)
        .then(res =>{
            console.log(res.data)  
        })
        .catch(e=>{
            console.log(e.response.data)
        })
        */