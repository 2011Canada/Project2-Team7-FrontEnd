import { BorderAllOutlined, Translate } from '@material-ui/icons'
import { profile } from 'console'
import React from 'react'
import SearchBar from './SearchBar'

const barStyle = {
    backgroundColor: "salmon"

}

const imageStyle = {
    borderRadius: "50px",
    border: "3px lightblue solid",
    margin: "0.8rem"
}
    
var userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
var isGuest = true;
if(userInfo != null){
    isGuest = false;
    console.log("userInfo.id: " + userInfo.id)
    console.log("userInfo.username: " + userInfo.username)
    console.log("userInfo.firstname: " + userInfo.firstname)
    console.log("userInfo.lastname: " + userInfo.lastname)
}

 const ProfileBar = () =>{

    
    return(
        <div style={barStyle} className="col-12">
            <div className="row">
                <div className="col-12 col-sm-4">
                    <img style={imageStyle} src="https://i.pravatar.cc/50" alt="Profile Picture of user"/>
                    <h5>{!isGuest? (userInfo.firstname + "  " + userInfo.lastname) : "Guest"} </h5>
                    <p>{!isGuest? ("username : " +userInfo.username +" | id: " + userInfo.id) : ""}</p>
                </div>
                <div style={{}} className="col-12 col-sm-4">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Search by </label>
                            <select className="form-control" id="exampleFormControlSelect1">
                            <option>Favorite</option>
                            <option>Strength</option>
                            <option>Review</option>
                            <option>Ingredient</option>
                            </select>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

function setIsGuest(){
   // alert("SETISGUEST")
    // if(currentUser == null){
    //     isGuest = true;
    //     alert("true")
    // }else{
    //     isGuest = false;
    //     alert("false")
    // }
}
    export default ProfileBar