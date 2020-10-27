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

export default class EditStock extends Component {
  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.editStockModal}
          toggle={this.props.toggleEditStockModal}
        >
          <ModalHeader toggle={this.props.toggleEditStockModal}>
            Update Stock
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="first_name">First Name</Label>
              <Input
                id="first_name"
                name="first_name"
                value={this.props.editStockData.first_name}
                onChange={this.props.onChangeEditStockHanler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="last_name">Last Name</Label>
              <Input
                id="last_name"
                name="last_name"
                value={this.props.editStockData.last_name}
                onChange={this.props.onChangeEditStockHanler}
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                value={this.props.editStockData.email}
                onChange={this.props.onChangeEditStockHanler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                value={this.props.editStockData.phone}
                onChange={this.props.onChangeEditStockHanler}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button 
              color="primary" 
              onClick={this.props.updateStock}
            >
              Update
            </Button>
            <Button
              color="secondary"
              onClick={this.props.toggleEditStockModal}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}