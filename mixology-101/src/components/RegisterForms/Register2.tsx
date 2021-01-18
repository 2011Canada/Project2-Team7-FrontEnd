import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useForm } from "react-hook-form";//install this

// styling missing

const RegisterComponent:any = ()=>{

    const {register, handleSubmit, errors} = useForm();


    const onSubmit = async (data:any)=>{
        console.log(data)

         await axios.post('http://localhost:8080/user',{
            "firstname": data.firstname,
            "id": 0,
            "lastname": data.lastname,
            "password": data.userpassword,
            "username": data.username
         })
         .then((response)=>{
            console.log("succefully registered!", response.data)
         })
         .catch((err)=>{console.log(err)})
    }

    
    return(
        <div className="card">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="First Name" name="firstname" ref={register({required:"First Name Required"})}/>
                <input type="text" placeholder="Last Name" name="lastname" ref={register({required:"Last Name Required"})}/>
                <input type="text" placeholder="Username" name="username" ref={register({required:"Username Required"})}/>
                <input type="password" placeholder="Password" name="userpassword" ref={register({required:"Password Required"})}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>

        
    )

}


export default RegisterComponent