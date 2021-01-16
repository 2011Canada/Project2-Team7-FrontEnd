import React, {useState, useEffect} from 'react';
// import getAllDrinks from '../../utils/asyncCalls';
import DrinkCard from './DrinksCard/DrinkCard'
import ProfileBar from './ProfileBar/ProfileBar'
import {useForm} from 'react-hook-form'
import axios from 'axios'



const bodyStyle = {
  minHeight: '90vh',
  backgroundColor: "#e9e9e9",
  overflow: "auto"
}

const MainBody = (props)=>{
    
    
   // console.log("MainBody Start")
    const [drinks, setDrinks] = useState([])
    let [call, setCall] = useState(null)
    let [cnt, setCnt] = useState(1)
    let [drinkName, setName] = useState(props.myDrink)
    const [ valueSlider, setValueSlider ] = useState(50); //Tracks the slider
    const [ingredient, setIngredient] = useState("")
    const {register, handleSubmit} = useForm()

    useEffect(() => {
        console.log("USEEFFECT INGRIDIENT SET", ingredient)
    }, [ingredient])

     useEffect(() => {document.title = "Home"}, [])
    
    
    const setTheDrink = async (dName:any)=>{
       // console.log("setTheDrink Start")
        setName(dName)
        setCnt(1)
        setDrinks([])
        const response =  await axios.get(`http://localhost:8080/drinks/drinkName/${dName}`).catch((err)=>{
            console.log(err)
        })
        if(response && response.data){
            //console.log("response.data: "+ response.data)
            setDrinks([response.data])
        }
        
        // else{
        //     alert(`${dName} DOES NOT EXIST`)
        // }

    }


    if(cnt === 1){
       // console.log("Here because of cnt == 1")
        if( props.myDrink !== null && props.myDrink !== '' && props.myDrink !== undefined){
            setTheDrink(props.myDrink);
            setCnt(cnt+1)
        }
    }

    if(drinkName !== props.myDrink){
        //console.log("drinkName !== props.myDrink")
        
        setTheDrink(props.myDrink);
    }
    
  

    const getCall1 = (e:Event)=>{ //DONE
        e.preventDefault();
        getAllDrinks();
        setCall(1)
    }

    let getCall2 = (data:any)=>{
        console.log(data, "DATA INGRIDIENT INSIDE CALL 2")
        setCall(2)
        setIngredient(data.ingredient)
        getDrinksByIngredientName(data.ingredient);
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






    const getAllDrinks = async ()=>{
        const response = await axios.get('http://localhost:8080/drinks').catch((err)=>{console.log(err)})

        if((response && response.data)){
            
            setDrinks([])
            response.data.forEach((element:any) => {
                if(parseInt(element.degree) <= valueSlider){
                    setDrinks(oldArray=>[...oldArray, element]);
                }
                
            })
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

    const getDrinksByIngredientName = async (ing)=>{
        console.log(ingredient, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
        console.log("START OF  GET DRINK BY ING NAME SEARCH")
        const response = await axios.get(`http://localhost:8080/drinks/ingredientName/${ing}`).catch((err)=>{console.log(err)})
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
                                    <form className="form-inline text-center" onSubmit={handleSubmit(getCall2)}>
                                        <div className="form-group mx-sm-3 mb-2">
                                            <input type="text" 
                                            className="form-control" 
                                            name="ingredient" 
                                            placeholder="Search by Ingredient" 
                                            ref={register()}
                                            />
                                            <button type="submit" className="btn btn-outline-primary my-3">Search</button>
                                        </div> 
                                    </form>
                                </div> 
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                {
                drinks.map((element)=>{
                    return(
                    
                    <DrinkCard key={element.id} id={element.id}  name={element.name} degree={element.degree} creator={element.drinkCreator.username}/>
                    )  
                })}
                </div>
            </div>
        </div>
    )

}

export default MainBody