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

export default class EditHcemployees extends Component {
  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.editHcemployeesModal}
          toggle={this.props.toggleEditHcemployeesModal}
        >
          <ModalHeader toggle={this.props.toggleEditHcemployeesModal}>
            Update Hcemployees
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="first_name">First Name</Label>
              <Input
                id="first_name"
                name="first_name"
                value={this.props.editHcemployeesData.first_name}
                onChange={this.props.onChangeEditHcemployeesHanler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="last_name">Last Name</Label>
              <Input
                id="last_name"
                name="last_name"
                value={this.props.editHcemployeesData.last_name}
                onChange={this.props.onChangeEditHcemployeesHanler}
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                value={this.props.editHcemployeesData.email}
                onChange={this.props.onChangeEditHcemployeesHanler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                value={this.props.editHcemployeesData.phone}
                onChange={this.props.onChangeEditHcemployeesHanler}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button 
              color="primary" 
              onClick={this.props.updateHcemployees}
            >
              Update
            </Button>
            <Button
              color="secondary"
              onClick={this.props.toggleEditHcemployeesModal}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}