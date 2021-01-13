import { BorderAllOutlined, Translate } from '@material-ui/icons'
import { profile } from 'console'
import React, { useState, useEffect } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import SearchBar from './SearchBar'


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
    border: "1px solid #611313",
    // "-webkit-box-shadow": "5px 5px 15px 5px #fcfcfc",
    "box-shadow": "2.5px 2.5px 15px 2.5px #e7caca"
}


const ProfileBar = (props:any) =>{

 const [ sliderValue, setValue ] = useState(50); 



  
var userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
var   isGuest = true;

  if(userInfo != null){
      isGuest = false;
  } else{
      isGuest = true;
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
                    <form style={{height:"100%"}}>
                            <button style={SearchButtonStyling} type="button" className="btn btn-danger btn-circle btn-xl">
                                <i className="fa fa-heart"></i>
                            </button>
                            <p className="badge">Favorites</p>
                    </form>
                </div>
                


{/* ================================UNDER CONSTRUCTION % ALCOHOL============================================================== */}
                {/* SEARCH DRINKS BY ALCOHOL CONTENT */}
                <div style={{}} className="col-12 col-sm-2 ">

                    <p>Alcohol Content</p>  
                    <form onSubmit={props.getCall3} style={{height:"100%"}}>
                        <RangeSlider
                            value={sliderValue}
                            onChange={(changeEvent:any) => {
                                    setValue(changeEvent.target.value)
                                    props.setValueSlider(sliderValue)
                                    
                                }
                            }
                            onAfterChange = {(e:any)=>{
                                setValue(e.target.value)
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

{/* ================================UNDER CONSTRUCTION % ALCOHOL============================================================== */}
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
        </div>
    )

}
export default ProfileBar

