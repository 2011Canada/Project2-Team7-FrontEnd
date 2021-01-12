import React from 'react'
import { Review } from './Review'

export class ViewReview extends React.Component<any,any> {
    constructor(props:any){
        super(props);
        this.state = {
            drinkId: 0
        }
        
    }

    async componentWillMount() {
            let _drinkId = window.location.href.substr(-1)
            this.setState({drinkId: _drinkId})
    }

    render() {
        console.log("drinkId : " + this.state.drinkId)
        return (
            
            <Review drinkId={this.state.drinkId}/>
           // <Review  key={this.state.drinkId} drinkId={this.state.drinkId} drinkName={this.state.drinkName} reviewList={this.state.currentReviewList}/>
        )
            
    }
}
