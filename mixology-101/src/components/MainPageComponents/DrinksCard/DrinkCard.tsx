import React from 'react'
import DrinkName from './DrinkName'

const cardStyle = {
    width: "70%",
        borderRadius: "18px"
}

const imageStyle = {
    width: "100%",
    height: "250px",
    
}


const DrinkCard:any = (props:any)=>{

    //console.log("DrinkId: " + props.id)
    let reviewUrl = "review/" + props.id
    let imgUrl = "img/"+props.id+".PNG"

    return(
    <div className="col-12 col-sm-6 col-md-6 col-lg-3 my-3 text-center">
        <div className="card" style={cardStyle}>
            <img style={imageStyle} className="card-img-top" src={imgUrl} alt="Card showing cocktail" />
            <div className="card-body">
                <DrinkName key={props.id} id={props.id}  name={props.name} degree={props.degree} creator={props.username}/>
                <small className="badge badge-pill bg-warning text-dark "> {props.degree}% {/*will be an object later */}</small> &nbsp;
                <p className="text-right btn badge btn-dark"><a style={{textDecorationColor: '#000', textDecorationStyle:'solid'}} href={reviewUrl}>Reviews</a> </p>
                <p className="card-text">Created by: {props.creator}</p>   
            </div>
        </div>
        
    </div>



    )


}

export default DrinkCard