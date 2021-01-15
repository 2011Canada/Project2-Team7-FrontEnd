
import axios from 'axios'


export const mixologyClient = axios.create({
    
    baseURL:"http://localhost:8080/",
    headers:{
        'Content-Type': "application/json",
        'Access-Control-Allow-Origin': "*" 
    }
})