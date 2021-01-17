
import React, { useState, useEffect } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import axios from 'axios'


const barStyle = {
    backgroundColor: "#ff914d",
    minHeight: "15vh"

}

const imageStyle = {
    borderRadius: "50px",
    border: "3px #ecf0f1 solid",
    margin: "0.8rem"
}

const SearchButtonStyling = {
    width: "70px",
    height: "70px",
    padding: "10px 16px",
    borderRadius: "35px",
    fontSize: "24px",
    lineHeight: "1.33",
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "Translate(-50%, -50%)",
    // border: "1px solid #020202",
   // "-webkit-box-shadow": "5px 5px 15px 5px #fcfcfc",
    //"box-shadow": "2.5px 2.5px 15px 2.5px #e7caca"
}

const profileDivStyling = {
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: "18px",
    border:"1px solid rgba(255,255,255,0.5)",
    padding: "0"
}


const ProfileBar = (props:any) =>{

 const [ sliderValue, setSliderValue ] = useState(50); 
 const [favorites, setFavorites] = useState([]);
 const [isHidden, setIsHidden] = useState(false)



  
var userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
var   isGuest = true;

  if(userInfo != null){
      isGuest = false;
  } else{
      isGuest = true;
  }

  
  


    const getFavorites = async (e:any)=>{
        e.preventDefault()
        //console.log("getdrinksbyalcoholcontentSTART")
        if(!isGuest){
            const response = await axios.get(`http://localhost:8080/user/favoriteDrinks/${userInfo.id}`).catch((err)=>{console.log(err)})
            setFavorites([])
            

            if((response && response.data)){
                // console.log(response.data)
                setFavorites(response.data)
                console.log(response.data)
            } 

            getHidden();
        }else{
            alert("Plaes login!")
        }
    }

    const getHidden = ()=>{
        isHidden ? setIsHidden(false) :  setIsHidden(true)
    }


    useEffect(() => {
    }, [isHidden])

    function addDrinkUrl(){
        //****** Should change to Adding drink page URL ****** */
        window.location.href="./add-drink"
    }

    return(
        <div style={barStyle} className="col-12">
            <div className="row p-3">
                <div style={profileDivStyling} className="col-12 col-sm-2 text-center">
                    <img style={imageStyle} src="https://i.pravatar.cc/50" alt="Profile Picture of user"/>
                    <h5>{!isGuest? (userInfo.firstname + "  " + userInfo.lastname) : "Guest"} </h5>
                    <p><span className="badge">{!isGuest? ("username : " +userInfo.username) : ""}</span></p>
                </div>



                {/* SEARCH ALL DRINKS */}
                <div style={{}} className="col-12 col-sm-3 text-center">
                    <form onSubmit={props.getCall1} style={{height:"100%"}}>
                            <button  style={SearchButtonStyling} type="submit" className="btn btn-success btn-circle btn-xl">
                                <i className="fa fa-cocktail"></i>
                            </button>
                            <p className="badge">All Drinks</p>
                            
                    </form>
                </div>



                {/* SEARCH FAVORITE DRINKS */}
                <div style={{}} className="col-12 col-sm-3 text-center">
                    <form onSubmit={getFavorites} style={{height:"100%"}}>
                            <button style={SearchButtonStyling} type="submit" className="btn btn-danger btn-circle btn-xl">
                                <i className="fa fa-heart"></i>
                            </button>
                            <p className="badge">Favorites</p>
                    </form>
                </div>
                

                 {/* SEARCH DRINKS BY INGREDIENT */}
                {/* <div style={{}} className="col-12 col-sm-2 ">
                    <form className="form-inline">

                        <div className="form-group mx-sm-3 mb-2">
                            <input type="text" className="form-control" id="ingredient" placeholder="Search by Ingredient" />
                            <button type="submit" className="btn btn-primary mb-2">Search</button>
                        </div>

                        
                    </form>
                </div> */}



                {/* SEARCH DRINKS BY ALCOHOL CONTENT */}
                <div style={{}} className="col-12 col-sm-3 text-center">

                    <p className="badge">Alcohol Content</p>  
                    <form onSubmit={props.getCall3} style={{height:"100%"}}>
                        <RangeSlider
                            value={sliderValue}
                            onChange={(changeEvent:any) => {
                                    setSliderValue(changeEvent.target.value)
                                    props.setValueSlider(sliderValue)
                                    
                                }
                            }
                            onAfterChange = {(e:any)=>{
                                setSliderValue(e.target.value)
                                props.setValueSlider(sliderValue)
                                props.getCall3()
                            }}
                            // max = true
                            variant='info'
                            tooltip="auto"
                            tooltipLabel={(e:any) =>{
                                return (`UP TO : ${props.getValueSlider()}% Alcohol`)
                                // return props.valueSlider
                            }}
                        />
                    </form>

                    

                </div>


                {/* SEARCH DRINKS BY INGREDIENT */}
                <div style={{}} className="col-12 col-sm-2 ">
                    <form style={{height:"100%"}}>
                            <button style={SearchButtonStyling} type="button" className="btn btn-info btn-circle btn-xl" onClick={addDrinkUrl} >
                               <i className="fas fa-plus-circle"></i>
                            </button>
                            <p className="badge">Add Your Drink</p>
                    </form>
                </div>

            </div>


{/* HIDDEN ROW FOR FAV DRINKS */}
{isHidden &&  <div className="row">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 >Favorites</h3>
                        </div>
                    </div>
                    <div className="row">
                        

                            {favorites.map((element)=>{
                                 return(
                                    <div className="col-md-2">
                                        <div className="alert alert-warning badge" role="alert">
                                            <i className="fas fa-cocktail fa-3x text-dark"> &nbsp;</i>
                                            <a className="text-dark" style={{textDecoration:"none"}} href={`../drinks/${element.name}`}>{element.name} • {element.degree}%</a> 
                                        </div>
                                    </div>
                                )
                            })     
                            }

                            
                        
                    </div>
                </div>
                
            </div>}



        </div>
    )

}
export default ProfileBar

