import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";
import {Link} from "react-router-dom";
import AddEmployees from '../employees/addemployees';
import EditEmployees from '../employees/editemployees';


export default class Employees extends Component {

    constructor(props){
        super(props);
        this.state = {
            employees: [],
            newEmployeesData:{
              first_name: "",
              last_name: "",
              email: "",
              phone: "",
            },
            isLoading: false,
            status: "",
            newEmployeesModal: false,
            editEmployeesData:{
            id: "",
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
          },
          editEmployeesModal: false,
          noDataFound: "",
        }
        const user =JSON.parse(localStorage.getItem("userData"));
    }

    componentDidMount() {
        this.getEmployees();
      }      
    getEmployees() {
    axios.get("http://localhost:8000/api/employees").then((response) => {
        if (response.status === 200) {
        this.setState({
            employees: response.data.data ? response.data.data : [],
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

    toggleNewEmployeesModal = () => {
        this.setState({
          newEmployeesModal: !this.state.newEmployeesModal,
        });
      };
    onChangeAddEmployeesHandler = (e) => {
        let { newEmployeesData } = this.state;
        newEmployeesData[e.target.name] = e.target.value;
        this.setState({ newEmployeesData });
    };
    addEmployees = () => {
        axios
          .post(
            "http://localhost:8000/api/create_employees",
            this.state.newEmployeesData
          )
          .then((response) => {
            const { employees } = this.state;
            const newEmployees = [...employees];
            newEmployees.push(response.data);
            this.setState(
              {
                employees: newEmployees,
                newEmployeesModal: false,
                newEmployeesData: {
                  first_name: "",
                  last_name: "",
                  email: "",
                  phone: "",
                },
              },
              () => this.getEmployees()
            );
          });
	};
	toggleEditEmployeesModal = () => {
	this.setState({
	  editEmployeesModal: !this.state.editEmployeesModal,
	});
	};
	onChangeEditEmployeesHandler = (e) => {
	    let { editEmployeesData } = this.state;
	    editEmployeesData[e.target.name] = e.target.value;
	    this.setState({ editEmployeesData });
	};
	editEmployees=(id,first_name,last_name,email,phone)=>{
		this.setState({
			editEmployeesData:{ id,first_name,last_name,email,phone },
			editEmployeesModal:!this.state.editEmployeesModal
		})
	}
	updateEmployees = () => {
		let{
			id,first_name,last_name,email,phone
		} = this.state.editEmployeesData;
		this.setState({
			isLoading:true,
		});
        axios
          .post(
            "http://localhost:8000/api/create_employees",
            {
				id,first_name,last_name,email,phone
			}
          )
          .then((response) => {
          	this.getEmployees()
            this.setState(
              {
                editEmployeesModal: false,
              	editEmployeesData: { first_name, last_name, email, phone },
              	isLoading:false,
              }
     		);
          })
          .catch((error) =>{
          	this.setState({isLoading:false})
          	console.log(error.response);
          });
	};

	deleteEmployees = (id) => {
        this.setState({
          isLoading: true,
        });
        axios
          .delete("http://localhost:8000/api/employees/" + id)
          .then((response) => {
            this.setState({
              isLoading: false,
            });
            this.getEmployees();
          })
          .catch((error) => {
            this.setState({
              isLoading: false,
            });
          });
      };
    
  	render() {
	    const { newEmployeesData, editEmployeesData, noDataFound, employees} = this.state;
	      let employeesDetails = [];
	      if (employees.length) {
	        employeesDetails = employees.map((employees) => {
	          return (
	            <tr key={employees.id}>
	              <td>{employees.id}</td>
	              <td>{employees.first_name}</td>
	              <td>{employees.last_name}</td>
	              <td>{employees.full_name}</td>
	              <td>{employees.email}</td>
	              <td>{employees.phone}</td>
	              <td>
	                <Button
	                  color="success"
	                  className="mr-3"
	                  size="sm"
	                  onClick={()=>
	                  	this.editEmployees(

	                  		employees.id,
	                  		employees.first_name,
	                  		employees.last_name,
	                  		employees.email,
	                  		employees.phone
	                  		)}
	                >
	                  Edit
	                </Button>
	                <Button
	                  color="danger"
	                  size="sm"
	                  onClick={()=>
	                  	this.deletEmployees(employees.id)
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
	           	<h4 className="font-weight-bold">Employees Register</h4>
	           	<div className="row"> 
		           <div className="col-xl-3 col-sm-12 col-md-3">
		           <Link to="/dashboard">
						<Button 
						className="float-right mb-4" 
						color="primary">
						Dashboard
						</Button>
		        	</Link> </div>{" "}
		       		{/* Model for Adding Employees Record */}
		       		<div className="">
		           	<AddEmployees
		                toggleNewEmployeesModal={this.toggleNewEmployeesModal}
		                newEmployeesModal={this.state.newEmployeesModal}
		                onChangeAddEmployeesHandler={this.onChangeAddEmployeesHandler}
		                addEmployees={this.addEmployees}
		                newEmployeesData={newEmployeesData}
		          	/>{" "}
		          	</div>
		         </div>
	          {/* Model for Adding Employees Record */}
	           <EditEmployees
	                toggleEditEmployeesModal={this.toggleEditEmployeesModal}
		            editEmployeesModal={this.state.editEmployeesModal}
		            onChangeEditEmployeesHanler={this.onChangeEditEmployeesHanler}
		            editEmployees={this.editEmployees}
		            editEmployeesData={editEmployeesData}
		            updateEmployees={this.updateEmployees}
	          />
	        <Table>
	          <thead>
	            <tr>
	              <th>#</th>
	              <th>First Name</th>
	              <th>Last Name</th>
	              <th>Full Name</th>
	              <th>Email</th>
	              <th>Phone</th>
	              <th>Actions</th>
	            </tr>
	          </thead>
	          {employees.length === 0 ? (
	            <tbody>
	              <h3>{noDataFound}</h3>
	            </tbody>
	          ) : (
	            <tbody>{employeesDetails}</tbody>
	          )}
	        </Table>
	      </div>
	    );
  	}
}