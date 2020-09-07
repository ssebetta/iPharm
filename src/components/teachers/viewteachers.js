import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";
import {Link} from "react-router-dom";
import AddTeacher from '../teachers/addteacher';
import EditTeacher from '../teachers/editteacher';


export default class Teacher extends Component {
    constructor(props){
        super(props);
        this.state = {
            Teachers: [],
            newTeacherData: {
              first_name: "",
              last_name: "",
              subjects: "",
              email: "",
              phone: "",
              start_date: "",
            },
            isLoading: false,
            status: "",
            newTeacherModal: false,
            editTeacherData: {
            id: "",
            first_name: "",
            last_name: "",
            subjects: "",
            email: "",
            phone: "",
            start_date: "",
          },
          editTeacherModal: false,
          noDataFound: "",
        }
    }

    componentDidMount() {
        this.getTeachers();
      }      
    getTeachers() {
    axios.get("http://localhost:8000/api/teachers").then((response) => {
        if (response.status === 200) {
        this.setState({
            Teachers: response.data.data ? response.data.data : [],
        });
        }
        if (
        response.data.status === "failed" &&
        response.data.success === false
        ) {
        this.setState({
            noDataFound: response.data.message,
        });
        }
    });
    } 

    toggleNewTeacherModal = () => {
        this.setState({
          newTeacherModal: !this.state.newTeacherModal,
        });
      };
    onChangeAddTeacherHandler = (e) => {
        let { newTeacherData } = this.state;
        newTeacherData[e.target.name] = e.target.value;
        this.setState({ newTeacherData });
    };
    addTeacher = () => {
        axios
          .post(
            "http://localhost:8000/api/add_teacher",
            this.state.newTeacherData
          )
          .then((response) => {
            const { Teachers } = this.state;
            const newTeachers = [...Teachers];
            newTeachers.push(response.data);
            this.setState(
              {
                Teachers: newTeachers,
                newTeacherModal: false,
                newTeacherData: {
                  first_name: "",
                  last_name: "",
                  subject: "",
                  email: "",
                  phone: "",
                  start_date: "",
                },
              },
              () => this.getTeachers()
            );
          });
	};
	toggleEditTeacherModal = () => {
	this.setState({
	  editTeacherModal: !this.state.editTeacherModal,
	});
	};
	onChangeEditTeacherHandler = (e) => {
	    let { editTeacherData } = this.state;
	    editTeacherData[e.target.name] = e.target.value;
	    this.setState({ editTeacherData });
	};
	editTeacher=(id,first_name,last_name,subjects,email,phone,start_date)=>{
		this.setState({
			editTeacherData:{ id,first_name,last_name,subjects,email,phone,start_date },
			editTeacherModal:!this.state.editTeacherModal
		})
	}
	updateTeacher = () => {
		let{
			id,first_name,last_name,subjects,email,phone,start_date
		} = this.state.editTeacherData;
		this.setState({
			isLoading:true,
		});
        axios
          .post(
            "http://localhost:8000/api/add_teacher",
            {
				id,first_name,last_name,subjects,email,phone,start_date
			}
          )
          .then((response) => {
          	this.getTeachers()
            this.setState(
              {
                editTeacherModal: false,
              	editTeacherData: { first_name, last_name, subjects, email, phone, start_date },
              	isLoading:false,
              }
     		);
          })
          .catch((error) =>{
          	this.setState({isLoading:false})
          	console.log(error.response);
          });
	};

	deleteTeacher = (id) => {
        this.setState({
          isLoading: true,
        });
        axios
          .delete("http://localhost:8000/api/teacher/" + id)
          .then((response) => {
            this.setState({
              isLoading: false,
            });
            this.getTeachers();
          })
          .catch((error) => {
            this.setState({
              isLoading: false,
            });
          });
      };
    
  	render() {
	    const { newTeacherData, editTeacherData, noDataFound, Teachers} = this.state;
	      let TeachersDetails = [];
	      if (Teachers.length) {
	        TeachersDetails = Teachers.map((Teacher) => {
	          return (
	            <tr key={Teacher.id}>
	              <td>{Teacher.id}</td>
	              <td>{Teacher.first_name}</td>
	              <td>{Teacher.last_name}</td>
	              <td>{Teacher.subjects}</td>
	              <td>{Teacher.email}</td>
	              <td>{Teacher.phone}</td>
	              <td>{Teacher.start_date}</td>
	              <td>
	                <Button
	                  color="success"
	                  className="mr-3"
	                  size="sm"
	                  onClick={()=>
	                  	this.editTeacher(

	                  		Teacher.id,
	                  		Teacher.first_name,
	                  		Teacher.last_name,
	                  		Teacher.subjects,
	                  		Teacher.email,
	                  		Teacher.phone,
	                  		Teacher.start_date
	                  		)}
	                >
	                  Edit
	                </Button>
	                <Button
	                  color="danger"
	                  size="sm"
	                  onClick={()=>
	                  	this.deletTeacher(Teacher.id)
	                  }
	                >
	                  Delete
	                </Button>
	              </td>
	            </tr>
	          );
	        });
	      }
	  
	      if (this.state.isLoading) {
	        return <div className="spinner-border text-center" role="status"> <span className="sr-only">Loading...</span>
	      </div>
	      } 
	    return (
	      <div className="Full container mt-4">
	           <h4 className="font-weight-bold">Teachers Register</h4> 
	           <div className="row"> 
		           <div className="col-xl-3 col-sm-12 col-md-3">
		           <Link to="/home">
						<Button 
						className="float-right mb-4" 
						color="primary">
						Home
						</Button>
		        	</Link> </div>{" "}
		       		{/* Model for Adding Teacher Record */}
		       		<div className="">
		           	<AddTeacher
		                toggleNewTeacherModal={this.toggleNewTeacherModal}
		                newTeacherModal={this.state.newTeacherModal}
		                onChangeAddTeacherHandler={this.onChangeAddTeacherHandler}
		                addTeacher={this.addTeacher}
		                newTeacherData={newTeacherData}
		          	/>{" "}
		          	</div>
		         </div>
	          {/* Model for Adding Studnet Record */}
	           <EditTeacher
	                toggleEditTeacherModal={this.toggleEditTeacherModal}
		            editTeacherModal={this.state.editTeacherModal}
		            onChangeEditTeacherHanler={this.onChangeEditTeacherHanler}
		            editTeacher={this.editTeacher}
		            editTeacherData={editTeacherData}
		            updateTeacher={this.updateTeacher}
	          />
	        <Table>
	          <thead>
	            <tr>
	              <th>#</th>
	              <th>First Name</th>
	              <th>Last Name</th>
	              <th>Subject</th>
	              <th>Email</th>
	              <th>Phone</th>
	              <th>Started</th>
	              <th>Actions</th>
	            </tr>
	          </thead>
	          {Teachers.length === 0 ? (
	            <tbody>
	              <h3>{noDataFound}</h3>
	            </tbody>
	          ) : (
	            <tbody>{TeachersDetails}</tbody>
	          )}
	        </Table>
	      </div>
	    );
  	}
}