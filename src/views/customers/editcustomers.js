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

export default class EditCustomerss extends Component {
  render() {
    const user =JSON.parse(localStorage.getItem("userData"));
    return (
      <div>
        <Modal
          isOpen={this.props.editCustomersModal}
          toggle={this.props.toggleEditCustomersModal}
        >
          <ModalHeader toggle={this.props.toggleEditCustomersModal}>
            Update Customers
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="first_name">First Name</Label>
              <Input
                id="first_name"
                name="first_name"
                value={this.props.editCustomersData.first_name}
                onChange={this.props.onChangeEditCustomersHanler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="last_name">Last Name</Label>
              <Input
                id="last_name"
                name="last_name"
                value={this.props.editCustomersData.last_name}
                onChange={this.props.onChangeEditCustomersHanler}
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                value={this.props.editCustomersData.email}
                onChange={this.props.onChangeEditCustomersHanler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                value={this.props.editCustomersData.phone}
                onChange={this.props.onChangeEditCustomersHanler}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button 
              color="primary" 
              onClick={this.props.updateCustomers}
            >
              Update
            </Button>
            <Button
              color="secondary"
              onClick={this.props.toggleEditCustomersModal}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}