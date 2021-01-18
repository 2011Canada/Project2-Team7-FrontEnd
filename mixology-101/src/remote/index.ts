
import axios from 'axios'


export const mixologyClient = axios.create({
    
    baseURL:"http://3.134.99.157:10000",
    headers:{
        'Content-Type': "application/json",
        'Access-Control-Allow-Origin': "*" 
    }
})
