import React, { Component , useState, useEffect} from 'react';
// import getAllDrinks from '../../utils/asyncCalls';
import DrinkCard from './DrinksCard/DrinkCard'
import ProfileBar from './ProfileBar/ProfileBar'
import axios from 'axios'



const bodyStyle = {
  minHeight: '87vh',
  backgroundColor: "whitesmoke",
//   background: "url('./avatarbg.png')",
//   backgroundSize:"contain",
//   backgroundRepeat: "no-repeat",
//   backgroundPosition: "center",
  overflow: "auto"
}

const styleHead = {
    height: '200vh'
}



const MainBody = ()=>{

    const [drinks, setDrinks] = useState([])
    let [call, setCall] = useState(null)
    const [ valueSlider, setValueSlider ] = useState(50); //Tracks the slider




    const getCall1 = (e:Event)=>{ //DONE
        e.preventDefault();
        getAllDrinks();
        setCall(1)
    }

    const getCall2 = (e:Event)=>{
        e.preventDefault();
        setCall(2)
    }

    const getCall3 = ()=>{ //WORKING
        console.log("call 3 being called")
        getDrinkByAlcoholContent()
        setCall(3)
    }

    const getCall4 = (e:Event)=>{
        e.preventDefault();
        setCall(4)
    }




// useEffect(() => {}, [valueSlider])




    const getAllDrinks = async ()=>{
        const response = await axios.get('http://localhost:8080/drinks').catch((err)=>{console.log(err)})

            if((response && response.data)){
            setDrinks(response.data)
            
        } 
        
    }

    const getDrinkByAlcoholContent = async ()=>{
        console.log("getdrinksbyalcoholcontentSTART")
        const response = await axios.get('http://localhost:8080/drinks').catch((err)=>{console.log(err)})
        setDrinks([])
        

            if((response && response.data)){
            // console.log(response.data)
            response.data.forEach((element:any) => {
                if(parseInt(element.degree) <= valueSlider){
                    setDrinks(oldArray=>[...oldArray, element]);
                }
                
            })
            
        } 
        console.log("getdrinksbyalcoholcontentEND")

    }

    const getValueSlider = (()=>{
        console.log("valueSlider has been set to ", valueSlider)
        return valueSlider
    })

  
    
    
    
    // call === 1 ? getAllDrinks() : console.log()
    // call === 3 ? getDrinkByAlcoholContent() : console.log()


//  useEffect(() => {}, []);
//  useEffect(() => {}, [])

    return(
        

        <div className="container-fluid" style={bodyStyle}>
            <div className="row">
                <ProfileBar 
                getCall1={getCall1} getCall2={getCall2} getCall3={getCall3} getCall4={getCall4} 
                setValueSlider={setValueSlider} getValueSlider={getValueSlider} valueSlider={valueSlider}
                />  
            </div>

            <div className="row">



                {
                drinks.map((element)=>{
                    return(<DrinkCard key={element.id} id={element.id}  name={element.name} degree={element.degree} creator={element.drinkCreator.username}/>)  
                })}

                

            </div>
        </div>
    )

}

export default MainBody