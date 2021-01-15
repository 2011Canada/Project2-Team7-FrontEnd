import React, { Component , useState, useEffect} from 'react';
// import getAllDrinks from '../../utils/asyncCalls';
import DrinkCard from './DrinksCard/DrinkCard'
import ProfileBar from './ProfileBar/ProfileBar'
import {useForm} from 'react-hook-form'
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
    const [ingredient, setIngredient] = useState("")
    const {register, handleSubmit} = useForm()




    const getCall1 = (e:Event)=>{ //DONE
        e.preventDefault();
        getAllDrinks();
        setCall(1)
    }

    const getCall2 = (data:any)=>{
        setCall(2)
        setIngredient(data.ingredient)
        getDrinksByIngredientName();
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




 useEffect(() => {document.title = "Home"}, [])




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
        // console.log("valueSlider has been set to ", valueSlider)
        return valueSlider
    })

    const getDrinksByIngredientName = async ()=>{
        console.log("START OF  GET DRINK BY ING NAME SEARCH")
        const response = await axios.get(`http://localhost:8080/drinks/ingredientName/${ingredient}`).catch((err)=>{console.log(err)})
        setDrinks([])

            if((response && response.data)){

            setDrinks(response.data)
            
        } 


    }

    

    return(
        
        

        <div className="container-fluid" style={bodyStyle}>
            <div className="row">
                <ProfileBar 
                getCall1={getCall1} getCall2={getCall2} getCall3={getCall3} getCall4={getCall4} 
                setValueSlider={setValueSlider} getValueSlider={getValueSlider} valueSlider={valueSlider}
                />  
            </div>

            <div className="row">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {(drinks.length > 0)  && 
                                <div style={{}} className="col-12 col-sm-2 ">
                                    <form className="form-inline" onSubmit={handleSubmit(getCall2)}>
                                        <div className="form-group mx-sm-3 mb-2">
                                            <input type="text" 
                                            className="form-control" 
                                            name="ingredient" 
                                            placeholder="Search by Ingredient" 
                                            ref={register()}
                                            />
                                            <button type="submit" className="btn btn-primary mb-2">Search</button>
                                        </div> 
                                    </form>
                                </div> 
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                {
                drinks.map((element)=>{
                    return(
                    
                    <DrinkCard key={element.id} id={element.id}  name={element.name} degree={element.degree} creator={element.drinkCreator.username}/>
                    )  
                })}

                

            </div>
        </div>
    )

}

export default MainBody