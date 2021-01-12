import React from 'react';

//export class Review extends React.Component<any,any> {
    export const Review: React.FunctionComponent<any> = (props) => {

        return(
            <div>
            DrinkName:  {props.drinkName}
            <table>
            <thead>
                <tr>
                    <th>REVIEW_ID</th><th>DESCRIPTION</th><th>RATE</th><th>EVALUATOR</th>
                </tr>
            </thead>
            <tbody>
               
            </tbody>
            </table>
        </div>
        );
    
    }




export default Review