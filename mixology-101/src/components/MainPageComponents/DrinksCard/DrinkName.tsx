import React from 'react'

const DrinkName:any = (props:any)=>{

    let drinkUrl = "/drinks/" + props.name;

    return(
        <h5><a href={drinkUrl} style={aStyle}>{props.name}</a></h5>
    )
}
var aStyle = {
    color: 'black',
};
export default DrinkName