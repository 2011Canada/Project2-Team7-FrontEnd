import React, {Component } from 'react'
import { reviewList } from '../../remote/mixRemote/mixRemoteFunc'


export class ViewReview extends React.Component<any,any> {
   constructor(props:any){
       super(props);
       this.state = {
           currentReviewList: [],
           listCnt: 0,
           drinkName: "" 
       }
   }

   async componentDidMount() {
        try {
            let res = await reviewList(3);
            this.setState({ currentReviewList: res });
            this.setState({drinkName: res[0].drink.name})
            while(this.state.listCnt < res.length){
                console.log(this.state.currentReviewList[this.state.listCnt]);
                this.setState({listCnt:this.state.listCnt+1})
            }
        } catch (e) {
            console.log(e);
        }
   }


    render() {
        const returnList = []
        for(const [index, value] of this.state.currentReviewList.entries()){
               returnList.push(<tr><td>{value.id}</td><td>{value.description}</td><td>{value.rate}</td><td>{value.author.username}</td></tr>)
        }
        return (
            <div>
                DrinkName:  {this.state.drinkName}
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
        );
    }
}

