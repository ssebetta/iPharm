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

export default class EditDrugs extends Component {
  render() {
    const user =JSON.parse(localStorage.getItem("userData"));
    return (
      <div>
        <Modal
          isOpen={this.props.editDrugsModal}
          toggle={this.props.toggleEditDrugsModal}
        >
          <ModalHeader toggle={this.props.toggleEditDrugsModal}>
            Update Drugs
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="first_name">First Name</Label>
              <Input
                id="first_name"
                name="first_name"
                value={this.props.editDrugsData.first_name}
                onChange={this.props.onChangeEditDrugsHanler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="last_name">Last Name</Label>
              <Input
                id="last_name"
                name="last_name"
                value={this.props.editDrugsData.last_name}
                onChange={this.props.onChangeEditDrugsHanler}
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                value={this.props.editDrugsData.email}
                onChange={this.props.onChangeEditDrugsHanler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                value={this.props.editDrugsData.phone}
                onChange={this.props.onChangeEditDrugsHanler}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button 
              color="primary" 
              onClick={this.props.updateDrugs}
            >
              Update
            </Button>
            <Button
              color="secondary"
              onClick={this.props.toggleEditDrugsModal}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}