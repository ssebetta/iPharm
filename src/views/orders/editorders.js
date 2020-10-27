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

export default class EditOrders extends Component {
  render() {
    const user =JSON.parse(localStorage.getItem("userData"));
    return (
      <div>
        <Modal
          isOpen={this.props.editOrdersModal}
          toggle={this.props.toggleEditOrdersModal}
        >
          <ModalHeader toggle={this.props.toggleEditOrdersModal}>
            Update Orders
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="first_name">First Name</Label>
              <Input
                id="first_name"
                name="first_name"
                value={this.props.editOrdersData.first_name}
                onChange={this.props.onChangeEditOrdersHanler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="last_name">Last Name</Label>
              <Input
                id="last_name"
                name="last_name"
                value={this.props.editOrdersData.last_name}
                onChange={this.props.onChangeEditOrdersHanler}
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                value={this.props.editOrdersData.email}
                onChange={this.props.onChangeEditOrdersHanler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                value={this.props.editOrdersData.phone}
                onChange={this.props.onChangeEditOrdersHanler}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button 
              color="primary" 
              onClick={this.props.updateOrders}
            >
              Update
            </Button>
            <Button
              color="secondary"
              onClick={this.props.toggleEditOrdersModal}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}