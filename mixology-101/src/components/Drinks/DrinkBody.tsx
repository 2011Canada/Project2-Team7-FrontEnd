import React from 'react';
import { drinkInfo } from '../../remote/mixRemote/mixRemoteFunc'



const imageStyle = {
    width: "20%",
    height: "250px",
    margin: "30px 0 30px 30px"
}

const contentStyle = {
    width: "15%",
    margin: "30px 0 0 0"
}


export class DrinkBody extends React.Component<any,any> {

    constructor(props:any){
        super(props);
        this.state = {
            drinkName: "",
            degree: 0,
            Ingredient: ["a","b"],
            creator: ""
        }
    }

    async componentWillMount() {
        let name = window.location.href.substring(29,)
        console.log("drinkName: " + name)
        let res = await drinkInfo(name)
        this.setState({drinkName: res.name})
        this.setState({degree: res.degree})
        //this.setState({Ingredient})
        this.setState({creator: (res.drinkCreator.firstname +" "+ res.drinkCreator.lastname)})
        console.log(this.state.drinkName)
    }
  
   render(){
    return(
        <div>
            <div className="container-fluid">
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
                   Recipe Info
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                   Review
                </div>
            </div>
        </div>
        
    )
   }

}

