
import React, { useState } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import axios from 'axios'


const barStyle = {
    backgroundColor: "salmon",
    minHeight: "15vh"

}

const imageStyle = {
    borderRadius: "50px",
    border: "3px lightblue solid",
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
    border: "1px solid #020202",
   // "-webkit-box-shadow": "5px 5px 15px 5px #fcfcfc",
    //"box-shadow": "2.5px 2.5px 15px 2.5px #e7caca"
}


const ProfileBar = (props:any) =>{

 const [ sliderValue, setSliderValue ] = useState(50); 
 const [favorites, setFavorites] = useState([]);



  
var userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
var   isGuest = true;

  if(userInfo != null){
      isGuest = false;
  } else{
      isGuest = true;
  }

  
  


    const getFavorites = async (e:any)=>{
        e.preventDefault()
        console.log("getdrinksbyalcoholcontentSTART")
        const response = await axios.get(`http://localhost:8080/user/favoriteDrinks/${userInfo.id}`).catch((err)=>{console.log(err)})
        setFavorites([])
        

        if((response && response.data)){
            // console.log(response.data)
            setFavorites(response.data)
        } 
    }




    return(
        <div style={barStyle} className="col-12">
            <div className="row">
                <div className="col-12 col-sm-4">
                    <img style={imageStyle} src="https://i.pravatar.cc/50" alt="Profile Picture of user"/>
                    <h5>{!isGuest? (userInfo.firstname + "  " + userInfo.lastname) : "Guest"} </h5>
                    <p>{!isGuest? ("username : " +userInfo.username +" | id: " + userInfo.id) : ""}</p>
                </div>



                {/* SEARCH ALL DRINKS */}
                <div style={{}} className="col-12 col-sm-2 ">
                    <form onSubmit={props.getCall1} style={{height:"100%"}}>
                            <button  style={SearchButtonStyling} type="submit" className="btn btn-success btn-circle btn-xl">
                                <i className="fa fa-cocktail"></i>
                            </button>
                            <p className="badge">All Drinks</p>
                            
                    </form>
                </div>



                {/* SEARCH FAVORITE DRINKS */}
                <div style={{}} className="col-12 col-sm-2 ">
                    <form onSubmit={getFavorites} style={{height:"100%"}}>
                            <button style={SearchButtonStyling} type="submit" className="btn btn-danger btn-circle btn-xl">
                                <i className="fa fa-heart"></i>
                            </button>
                            <p className="badge">Favorites</p>
                    </form>
                </div>
                



                {/* SEARCH DRINKS BY ALCOHOL CONTENT */}
                <div style={{}} className="col-12 col-sm-2 ">

                    <p>Alcohol Content</p>  
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
                            <button style={SearchButtonStyling} type="button" className="btn btn-info btn-circle btn-xl">
                                <i className="fas fa-mortar-pestle"></i>
                            </button>
                            <p className="badge">Search By Ingridient</p>
                    </form>
                </div>

            </div>


{/* HIDDEN ROW FOR FAV DRINKS */}
            <div className="row">
                <div className="container">
                    {/* <div className="row">
                        <div className="col-md-12">
                            <h3 >Favorites</h3>
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col-md-2">

                            {favorites.map((element)=>{
                                 return(
                                    <div className="alert alert-success" role="alert">
                                        <a className="text-dark" style={{textDecorationColor:"black"}} href="">{element.name} • {element.degree}%</a> 
                                    </div>
                                )
                            })     
                            }

                            
                        </div>
                    </div>
                </div>
                
            </div>



        </div>
    )

}
export default ProfileBar

