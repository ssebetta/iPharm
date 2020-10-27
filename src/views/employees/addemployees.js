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

export default class AddEmployees extends Component {
  render() {
    const user =JSON.parse(localStorage.getItem("userData"));
    return (
      <div>
        
        <Button 
          className="float-right mb-4" 
          color="primary"
          onClick={this.props.toggleNewEmployeesModal}>
          Add Employees
        </Button>
        <Modal
        isOpen={this.props.newEmployeesModal}
        toggle={this.props.toggleNewEmployeesModal}
        >
          <ModalHeader toggle={this.props.toggleNewEmployeesModal}>Add new Employees</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="first_name">First Name</Label>
              <Input 
                id="first_name" 
                name="first_name"
                value={this.props.newEmployeesData.first_name}
                onChange={this.props.onChangeAddEmployeesHandler} 
              />
            </FormGroup>
            <FormGroup>
              <Label for="last_name">Last Name</Label>
              <Input 
                id="last_name" 
                name="last_name"
                value={this.props.newEmployeesData.last_name}
                onChange={this.props.onChangeAddEmployeesHandler}  
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input 
                id="email" 
                name="email"
                value={this.props.newEmployeesData.email}
                onChange={this.props.onChangeAddEmployeesHandler}  
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Input 
                id="phone" 
                name="phone"
                value={this.props.newEmployeesData.phone}
                onChange={this.props.onChangeAddEmployeesHandler}  
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>this.props.addEmployees()}> Add </Button>{" "}
            <Button color="secondary" onClick={this.props.toggleNewEmployeesModal}> Cancel </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}