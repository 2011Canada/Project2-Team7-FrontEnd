import React from 'react'

const DrinkName:any = (props:any)=>{

    let drinkUrl = "../drinks/" + props.name;
   
    return(
        <h5><strong><a href={drinkUrl}>{props.name}</a></strong></h5>
    )


}

export default DrinkName