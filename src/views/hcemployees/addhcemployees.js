import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import {Link} from "react-router-dom";

export default class AddHcemployees extends Component {
  render() {
    return (
      <div>
        
        <Button 
          className="float-right mb-4" 
          color="primary"
          onClick={this.props.toggleNewHcemployeesModal}>
          Add Hcemployees
        </Button>
        <Modal
        isOpen={this.props.newHcemployeesModal}
        toggle={this.props.toggleNewHcemployeesModal}
        >
          <ModalHeader toggle={this.props.toggleNewHcemployeesModal}>Add new Hcemployees</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="first_name">First Name</Label>
              <Input 
                id="first_name" 
                name="first_name"
                value={this.props.newHcemployeesData.first_name}
                onChange={this.props.onChangeAddHcemployeesHandler} 
              />
            </FormGroup>
            <FormGroup>
              <Label for="last_name">Last Name</Label>
              <Input 
                id="last_name" 
                name="last_name"
                value={this.props.newHcemployeesData.last_name}
                onChange={this.props.onChangeAddHcemployeesHandler}  
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input 
                id="email" 
                name="email"
                value={this.props.newHcemployeesData.email}
                onChange={this.props.onChangeAddHcemployeesHandler}  
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Input 
                id="phone" 
                name="phone"
                value={this.props.newHcemployeesData.phone}
                onChange={this.props.onChangeAddHcemployeesHandler}  
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>this.props.addHcemployees()}> Add </Button>{" "}
            <Button color="secondary" onClick={this.props.toggleNewHcemployeesModal}> Cancel </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}