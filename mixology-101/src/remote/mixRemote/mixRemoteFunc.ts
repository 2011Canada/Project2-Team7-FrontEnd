import { mixologyClient } from "."




export const login = async (username:string, password:string) => {
    let credentials = {
        username,
        password
    }

    try{
        let res = await mixologyClient.post('/login', credentials)
        
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