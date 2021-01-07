
import axios from 'axios'

export const mixologyClient = axios.create({
    baseURL:"http://localhost:8080/Project1",
    headers:{
        'Content-Type': "application/json"
    }
})