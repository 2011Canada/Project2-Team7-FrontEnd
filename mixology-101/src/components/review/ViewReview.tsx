import React from 'react'
import { Review } from './Review'
import { drinkInfoById } from '../../remote/mixRemote/mixRemoteFunc'

export class ViewReview extends React.Component<any,any> {
    
    constructor(props:any){
       // console.log("constructor")
        super(props);
        console.log("drinkbody_constructor_props:"+ props.drinkId)
        this.state = {
            drinkId: 0,
            drinkName: "",
            degree: 0,
            Ingredient: ["a","b"],
            creator: ""
        }
    }

    
    async componentWillMount() {
       // console.log("componentWillMount")
            let _drinkId = window.location.href.substring(29,)
            this.setState({drinkId: _drinkId})
            let res = drinkInfoById(_drinkId)
            res.then((data) =>{
               //console.log("data.id: " + data.id)
                this.setState({drinkId: data.id})
                this.setState({drinkName: data.name})
                this.setState({degree: data.degree})
                //this.setState({Ingredient})
                this.setState({creator: (data.drinkCreator.firstname +" "+ data.drinkCreator.lastname)})

            })
    }

    render() {
        console.log("drinkId : " + this.state.drinkId)
        return (

            <Review  key={this.state.drinkId} drinkId={this.state.drinkId} drinkName={this.state.drinkName} reviewList={this.state.currentReviewList} creator={this.state.creator}/>
        )
            
    }
}
