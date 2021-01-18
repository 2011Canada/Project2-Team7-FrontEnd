import React from 'react';
import { drinkInfoByName } from '../../remote/mixRemote/mixRemoteFunc'
import { drinkInfo } from '../../remote/mixRemote/mixRemoteFunc'
import { Ingredients } from './Ingredients'
import { Review } from '../review/Review'
import { Button} from '@material-ui/core'
import { FavouriteForm } from '../Favourite/Favourite';
import { PopUpForm } from '../PopUpWindow/PopUpForm';
import { ButtonToolbar } from 'react-bootstrap';
import { red } from '@material-ui/core/colors';

const imageStyle = {
    width: "12rem",
    height: "12rem",
    display: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    // transform: "Translate(-50%, -50%)",

    borderRadius : "50%"

}

const bodyStyle = {
    minHeight: '87vh',
    backgroundColor: "whitesmoke",
    overflow: "auto"
}


const contentStyle = {
    width: "100%",
    margin: "30px 0 0 0"
}

const drinkInfoStyle = {
    // width: "100%",
    // display:"flex"

}

const heartStyle = {
    position : "absolute" as "absolute",
    fontSize: "1rem",
    color: "lightred",
    top: "29%",
    left: "56%",
    zIndex: 1,



}


export class DrinkBody extends React.Component<any,any> {

    constructor(props:any){
        super(props);

        this.state = {
            drinkId: 0,
            drinkName: "",
            degree: 0,
            Ingredient: ["a","b"],
            creator: "",
            addModalShow: false

        }
    }

    async componentWillMount() {
        let name = window.location.href.substring(29,)

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

        let response = await drinkInfo(name)
        this.setState({drinkName: response.name})
        this.setState({degree: response.degree})
        this.setState({creator: (response.drinkCreator.firstname +" "+ response.drinkCreator.lastname)})


        // setting drink info in session
        let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
        sessionStorage.setItem("drinkName",  JSON.stringify(name))
        sessionStorage.setItem("drinkdegree",  JSON.stringify(response.degree))
        sessionStorage.setItem("drinkCreatorFirstName",  JSON.stringify(response.drinkCreator.firstname))
        sessionStorage.setItem("drinkCreatorLastName",  JSON.stringify(response.drinkCreator.lastname))
        sessionStorage.setItem("drinkCreatorId", JSON.stringify(response.drinkCreator.id))
        sessionStorage.setItem("drinkCreatorUsername", JSON.stringify(response.drinkCreator.username))
        sessionStorage.setItem("drinkCreatorPassword", JSON.stringify(response.drinkCreator.password))
        sessionStorage.setItem("drinkId", JSON.stringify(response.id))

    }
  
   render(){
    let addModalClose = ()=> this.setState({addModalShow:false});  
    let imgUrl = "../img/"+this.state.drinkId+".PNG"
    return(
        <div className="container-fluid" style={bodyStyle}>
            
             <div style={heartStyle}>
             <FavouriteForm/>
             </div>
            
            <div >
                <div style={drinkInfoStyle} id="drinkInfoStyle" className="row text-center">

                    <div className="col-12 pt-5">
                        
                        <img style={imageStyle} className="card-img-top" src={imgUrl} alt="Card image cap" />
                    </div>

                    <div className="col-12 text-center pb-5" >
                        <p style={contentStyle}>
                            
                        <strong style={{fontSize: "2rem"}}> {this.state.drinkName}</strong>
                        <br />
                        <span style={{backgroundColor: "#ff914d"}} className="badge text-dark p-2"> Creator: {this.state.creator}</span>
                        <br />
                        
                        {/* Degree:  {this.state.degree}% */}
                        
                        </p>    
                        
                    </div>     

                </div>
            </div>

            <div className="container-fluid">

                <div style={{backgroundColor:"#ffe5bd", borderRadius:"18px"}} className="py-5">
                    <h4> Preparation </h4>
                    <p>Prepare all ingredients. Mix all ingredients:</p>
                    <Ingredients  key={this.state.drinkId} drinkId={this.state.drinkId} />
                    <p>Add lemon on top</p>
                    <p>Voila! Enjoy!</p>
                </div>
                
            </div>
            <div className="container-fluid">
            <div className="py-5" >
                <div className="AddReviewPopup">
                    <h4>Reviews</h4>
               
                    <ButtonToolbar>
                        <Button
                            style = {{
                                left: "47%",
                                translate: 'Translate(0, -50%)'
                            }}
                            variant = "outlined"
                            onClick = {()=> this.setState({addModalShow: true})}
                        >
                            Add Review   
                        </Button>
                        <PopUpForm
                            show = {this.state.addModalShow}
                            onHide ={addModalClose}
                        />
                    </ButtonToolbar>
                    </div>
                    <div className="row" >
                    <Review key={this.state.drinkId} drinkId={this.state.drinkId} drinkName={this.state.drinkName} reviewList={this.state.currentReviewList} creator={this.state.creator}/>
                </div>
            </div>

            </div>
        </div>
        
    )
    }
}