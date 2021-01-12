import React from 'react'
import { reviewList } from '../../remote/mixRemote/mixRemoteFunc'
import { Review } from './Review'

export class ViewReview extends React.Component<any,any> {
   constructor(props:any){
       super(props);
       this.state = {
           drinkId: 0,
           currentReviewList: [],
           listCnt: 0,
           drinkName: "" 
       }
      
   }

   async componentDidMount() {
        let _drinkId = window.location.href.substr(-1)
        this.setState({drinkId: _drinkId})
        try {
            let res = await reviewList(_drinkId);
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
            //<Review />
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


/*

 
*/
