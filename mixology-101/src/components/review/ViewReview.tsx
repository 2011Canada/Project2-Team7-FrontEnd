import React from 'react'
import { Review } from './Review'
import { drinkInfo } from '../../remote/mixRemote/mixRemoteFunc'

export class ViewReview extends React.Component<any,any> {
    
    constructor(props:any){
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
            let _drinkId = window.location.href.substr(-1)
            this.setState({drinkId: _drinkId})
            let name = window.location.href.substring(29,)
            console.log("drinkName: " + name)
            let res = drinkInfo(name)
            res.then((data) =>{
                console.log("in DrinkBody, res.id: " + data.id)
                this.setState({drinkId: data.id})
                this.setState({drinkName: data.name})
                this.setState({degree: data.degree})
                //this.setState({Ingredient})
                this.setState({creator: (data.drinkCreator.firstname +" "+ data.drinkCreator.lastname)})
                console.log(this.state.drinkName)
            })
    }

    render() {
        console.log("drinkId : " + this.state.drinkId)
        return (

            <Review  key={this.state.drinkId} drinkId={this.state.drinkId} drinkName={this.state.drinkName} reviewList={this.state.currentReviewList} creator={this.state.creator}/>
        )
            
    }
}
