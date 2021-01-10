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