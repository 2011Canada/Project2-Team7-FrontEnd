import React from 'react';
import { drinkInfoByName } from '../../remote/mixRemote/mixRemoteFunc'
import { Review } from '../review/Review'
import { Ingredients } from './Ingredients'
import { Button} from '@material-ui/core'

const imageStyle = {
    width: "20%",
    height: "250px",
    margin: "30px 0 30px 30px"
}

const bodyStyle = {
    minHeight: '87vh',
    backgroundColor: "whitesmoke",
    overflow: "auto"
}


const contentStyle = {
    width: "15%",
    margin: "30px 0 0 0"
}


export class DrinkBody extends React.Component<any,any> {

    constructor(props:any){
        super(props);

        this.state = {
            drinkId: 0,
            drinkName: "",
            degree: 0,
            Ingredient: ["a","b"],
            creator: ""
        }
    }

     componentWillMount() {
        let name = window.location.href.substring(29,)
        console.log("drinkName: " + name)
        let res = drinkInfoByName(name)
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
  
   render(){
   
    return(
        <div className="container-fluid" style={bodyStyle}>
            <div >
                <div className="row">
                    <img style={imageStyle} className="card-img-top" src="https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg/preview" alt="Card image cap" />
                    <p style={contentStyle}>
                    Name: <strong > {this.state.drinkName}</strong><br />
                    Degree:  {this.state.degree}<br />
                    Ingredient: {this.state.Ingredient}<br />
                    Creator: {this.state.creator}
                    </p>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                <h4 style={{ marginLeft:20, marginTop: 20 }}>** Ingredients **
                <Button type="submit" variant="outlined" style={btnStyle}>Add</Button>
                </h4>
                </div>
                <div className="row"  style={{ marginLeft:20}}>
                <Ingredients  key={this.state.drinkId} drinkId={this.state.drinkId} />
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                <h4 style={{ marginLeft:20, marginTop: 50, marginRight:40}}>** Review ** 
                <Button type="submit" variant="outlined" style={btnStyle} href="/addReview">Add</Button>
                </h4>
                </div>
                <div className="row" >
                <Review key={this.state.drinkId} drinkId={this.state.drinkId} drinkName={this.state.drinkName} reviewList={this.state.currentReviewList} creator={this.state.creator}/>
                </div>
            </div>
        </div>
        
    )
   }

}

var btnStyle = {
    height: 30,
};