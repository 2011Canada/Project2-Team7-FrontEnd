import React, { Component , useState, useEffect} from 'react';
// import getAllDrinks from '../../utils/asyncCalls';
import DrinkCard from './DrinksCard/DrinkCard'
import ProfileBar from './ProfileBar/ProfileBar'
import axios from 'axios'



const bodyStyle = {
  minHeight: '87vh',
  backgroundColor: "whitesmoke",
  overflow: "auto"
}

const styleHead = {
    height: '200vh'
}



const MainBody = ()=>{

    const [drinks, setDrinks] = useState([])
 
    let [call, setCall] = useState(null)


    const getCallAll = (e:Event)=>{
        e.preventDefault();
        setCall(call = 1)
    }

    const getDrinks = async ()=>{
        const response = await axios.get('http://localhost:8080/drinks').catch((err)=>{console.log(err)})

            if((response && response.data)){
            setDrinks(response.data)
            
        } 
        setCall(null);
    }
    
    
    //call === 1 ? getDrinks() : console.log("none")

 
 useEffect(() => {
    getDrinks()
    // console.log("does this update? call= ", call)
    }, []);

    return(
        

        <div className="container-fluid" style={bodyStyle}>
            <div className="row">
                <ProfileBar call={getCallAll} />  
            </div>

            <div className="row">
                {drinks.map((element)=>{
                    return(<DrinkCard key={element.id} id={element.id}  name={element.name} degree={element.degree} creator={element.drinkCreator.username}/>)  
                })}
            </div>
        </div>
    )

}

export default MainBody