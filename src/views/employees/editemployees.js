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

export default class EditEmployees extends Component {
  render() {
    const user =JSON.parse(localStorage.getItem("userData"));
    return (
      <div>
        <Modal
          isOpen={this.props.editEmployeesModal}
          toggle={this.props.toggleEditEmployeesModal}
        >
          <ModalHeader toggle={this.props.toggleEditEmployeesModal}>
            Update Employees
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="first_name">First Name</Label>
              <Input
                id="first_name"
                name="first_name"
                value={this.props.editEmployeesData.first_name}
                onChange={this.props.onChangeEditEmployeesHanler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="last_name">Last Name</Label>
              <Input
                id="last_name"
                name="last_name"
                value={this.props.editEmployeesData.last_name}
                onChange={this.props.onChangeEditEmployeesHanler}
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                value={this.props.editEmployeesData.email}
                onChange={this.props.onChangeEditEmployeesHanler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                value={this.props.editEmployeesData.phone}
                onChange={this.props.onChangeEditEmployeesHanler}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button 
              color="primary" 
              onClick={this.props.updateEmployees}
            >
              Update
            </Button>
            <Button
              color="secondary"
              onClick={this.props.toggleEditEmployeesModal}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}