import React from 'react'

const cardStyle = {
    width: "70%",
        borderRadius: "18px"
}

const imageStyle = {
    width: "100%",
    height: "250px",

    
    
}


const DrinkCard:any = (props:any)=>{

    console.log(props)
    return(
    <div className="col-12 col-sm-6 col-md-6 col-lg-3 my-3 text-center">
        <div className="card" style={cardStyle}>
            <img style={imageStyle} className="card-img-top" src="https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg/preview" alt="Card showing cocktail" />
            <div className="card-body">
                <h5 ><strong>{props.name}</strong>   </h5>
                <small className="badge badge-pill bg-warning text-dark "> {props.degree}% {/*will be an object later */}</small> &nbsp;
                <p className="text-right btn badge btn-secondary">Reviews</p>
                <p className="card-text">Created by: {props.creator}</p>
                
            </div>
        </div>

        {/* <div className="chip">
            <img src="img_avatar.png" alt="Person" width="96" height="96">
            John Doe 
            <span className="closebtn" onClick={ReactDOM.findDOMNode(this).parentNode.style.display='none'}>&times;</span>
        </div> */}
    </div>



    )


}

export default DrinkCard