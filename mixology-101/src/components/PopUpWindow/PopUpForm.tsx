import React , {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import { AddReviewForm } from '../AddReviewForms/AddReview';


export class PopUpForm extends React.Component<any>{
    
    constructor(props){
        super(props);
        let onHide 
        let show
    }

    render(){
        return(
            <>        
               <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        Add Review
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className ="container">
                            <AddReviewForm/>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant = "danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                    </Modal>
            </>
        )
    }
}