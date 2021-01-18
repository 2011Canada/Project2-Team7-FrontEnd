import { emphasize } from '@material-ui/core';
import React from 'react';
import { ingredientsList } from '../../remote/mixRemote/mixRemoteFunc'

export class Ingredients extends React.Component<any, any> {
    
    constructor(props:any){
        
        super(props);
        this.state = {
            key: 0,
            drinkId: props.drinkId,
            ingredientsList: []
        }
        
    }

    async componentWillMount() {
        try{
            let res = await ingredientsList(this.state.drinkId);
            this.setState({ key: res.id });
            this.setState({ ingredientsList: res });
        }catch(e){
            console.log(e)
            if(e.response){
                throw new Error(e.response.data)
            } else {
                throw new Error("ERROR ON CALLING INGREDIENTS")
            }
        }
        
    }


    render() {
        let returnList = []

        for(const [index, value] of this.state.ingredientsList.entries()){
            returnList.push(value.name + ", ")
        }
       
        return (
            <div className ="text-danger">
                 {returnList}
            </div>
        )
    }
}


