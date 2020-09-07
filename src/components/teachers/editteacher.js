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

export default class EditTeacher extends Component {
  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.editTeacherModal}
          toggle={this.props.toggleEditTeacherModal}
        >
          <ModalHeader toggle={this.props.toggleEditTeacherModal}>
            Update Teacher
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="first_name">First Name</Label>
              <Input
                id="first_name"
                name="first_name"
                value={this.props.editTeacherData.first_name}
                onChange={this.props.onChangeEditTeacherHanler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="last_name">Last Name</Label>
              <Input
                id="last_name"
                name="last_name"
                value={this.props.editTeacherData.last_name}
                onChange={this.props.onChangeEditTeacherHanler}
              />
            </FormGroup>
             <FormGroup>
              <Label for="subjects">Subjects (separate with a comma)</Label>
              <Input
                id="subjects"
                name="subjects"
                value={this.props.editTeacherData.subjects}
                onChange={this.props.onChangeEditTeacherHanler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                value={this.props.editTeacherData.email}
                onChange={this.props.onChangeEditTeacherHanler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                value={this.props.editTeacherData.phone}
                onChange={this.props.onChangeEditTeacherHanler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="start_date">Started On</Label>
              <Input

                id="start_date"
                name="start_date"
                value={this.props.editTeacherData.start_date}
                onChange={this.props.onChangeEditTeacherHanler}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button 
              color="primary" 
              onClick={this.props.updateTeacher}
            >
              Update
            </Button>
            <Button
              color="secondary"
              onClick={this.props.toggleEditTeacherModal}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}