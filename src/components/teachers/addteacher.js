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
//import DatePicker from 'react-datepicker'
import {Link} from "react-router-dom";

export default class AddTeacher extends Component {
  render() {
    return (
      <div>
        
        <Button 
          className="float-right mb-4" 
          color="primary"
          onClick={this.props.toggleNewTeacherModal}>
          Add Teacher
        </Button>
        <Modal
        isOpen={this.props.newTeacherModal}
        toggle={this.props.toggleNewTeacherModal}
        >
          <ModalHeader toggle={this.props.toggleNewTeacherModal}>Add New Teacher</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="first_name">First Name</Label>
              <Input 
                id="first_name" 
                name="first_name"
                value={this.props.newTeacherData.first_name}
                onChange={this.props.onChangeAddTeacherHandler} 
              />
            </FormGroup>
            <FormGroup>
              <Label for="last_name">Last Name</Label>
              <Input 
                id="last_name" 
                name="last_name"
                value={this.props.newTeacherData.last_name}
                onChange={this.props.onChangeAddTeacherHandler}  
              />
            </FormGroup>
            <FormGroup>
              <Label for="subjects">Subjects (separate with a comma)</Label>
              <Input 
                id="subjects" 
                name="subjects"
                value={this.props.newTeacherData.subjects}
                onChange={this.props.onChangeAddTeacherHandler}  
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input 
                id="email" 
                name="email"
                value={this.props.newTeacherData.email}
                onChange={this.props.onChangeAddTeacherHandler}  
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Input 
                id="phone" 
                name="phone"
                value={this.props.newTeacherData.phone}
                onChange={this.props.onChangeAddTeacherHandler}  
              />
            </FormGroup>
            <FormGroup>
              <Label for="start_date">Start On</Label>
              <Input 
                id="start_date" 
                name="start_date"
                value={this.props.newTeacherData.start_date}
                onChange={this.props.onChangeAddTeacherHandler}  
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>this.props.addTeacher()}> Add </Button>{" "}
            <Button color="secondary" onClick={this.props.toggleNewTeacherModal}> Cancel </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}