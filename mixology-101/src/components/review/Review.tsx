import React from 'react';
import { reviewList } from '../../remote/mixRemote/mixRemoteFunc'

export class Review extends React.Component<any, any> {
    
    constructor(props:any){
        
        super(props);
        console.log("constructor: propss.drinkId: " + props.drinkId)
        this.state = {
            drinkId: props.drinkId,
            currentReviewList: [],
            listCnt: 0,
            drinkName: "" 
        }
        
    }

    async componentWillMount() {
        try{
            //this.setState({ drinkId: props.drinkId});
           console.log("Aaaaa" + this.state.drinkId)
            let res = await reviewList(this.state.drinkId);
            this.setState({ currentReviewList: res });
            this.setState({drinkName: res[0].drink.name})
            while(this.state.listCnt < res.length){
                console.log(this.state.currentReviewList[this.state.listCnt]);
            this.setState({listCnt:this.state.listCnt+1})
        }
        }catch(e){

        }
        
    }


    render() {
        let returnList = []

        for(const [index, value] of this.state.currentReviewList.entries()){
            returnList.push(<tr><td>{value.id}</td><td>{value.description}</td><td>{value.rate}</td><td>{value.author.username}</td></tr>)
        }
        
        return (
            <div>
                DrinkName: {this.state.drinkName}
            <table>
            <thead>
                <tr>
                    <th>REVIEW_ID</th><th>DESCRIPTION</th><th>RATE</th><th>EVALUATOR</th>
                </tr>
            </thead>
            <tbody>
               {returnList}
            </tbody>
            </table>
        </div>
        )
    }
}


