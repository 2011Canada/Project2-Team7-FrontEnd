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


    const getDrinks = async ()=>{
        const response = await axios.get('http://localhost:8080/drinks').catch((err)=>{console.log(err)})

        if(response && response.data){
            setDrinks(response.data)
        }
    }

    useEffect(() => {
        getDrinks()
    }, []) // if bracket is present, empty bracket means it only run once on on mounting



    
    return(
        

        <div className="container-fluid" style={bodyStyle}>
            <div className="row">
                <ProfileBar />
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