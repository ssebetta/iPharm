import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";
import {Link} from "react-router-dom";
import AddHcemployees from '../hcemployees/addhcemployees';
import EditHcemployees from '../hcemployees/edithcemployees';


export default class Hcemployees extends Component {
    constructor(props){
        super(props);
        this.state = {
            hcemployees: [],
            newHcemployeesData: {
              first_name: "",
              last_name: "",
              email: "",
              phone: "",
            },
            isLoading: false,
            status: "",
            newHcemployeesModal: false,
            editHcemployeesData: {
            id: "",
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
          },
          editHcemployeesModal: false,
          noDataFound: "",
        }
    }

    componentDidMount() {
        this.getHcemployees();
      }      
    getHcemployees() {
    axios.get("http://localhost:8000/api/hcemployees").then((response) => {
        if (response.status === 200) {
        this.setState({
            hcemployees: response.data.data ? response.data.data : [],
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

    toggleNewHcemployeesModal = () => {
        this.setState({
          newHcemployeesModal: !this.state.newHcemployeesModal,
        });
      };
    onChangeAddHcemployeesHandler = (e) => {
        let { newHcemployeesData } = this.state;
        newHcemployeesData[e.target.name] = e.target.value;
        this.setState({ newHcemployeesData });
    };
    addHcemployees = () => {
        axios
          .post(
            "http://localhost:8000/api/create_hcemployees",
            this.state.newHcemployeesData
          )
          .then((response) => {
            const { hcemployees } = this.state;
            const newHcemployees = [...hcemployees];
            newHcemployees.push(response.data);
            this.setState(
              {
                hcemployees: newHcemployees,
                newHcemployeesModal: false,
                newHcemployeesData: {
                  first_name: "",
                  last_name: "",
                  email: "",
                  phone: "",
                },
              },
              () => this.getHcemployees()
            );
          });
	};
	toggleEditHcemployeesModal = () => {
	this.setState({
	  editHcemployeesModal: !this.state.editHcemployeesModal,
	});
	};
	onChangeEditHcemployeesHandler = (e) => {
	    let { editHcemployeesData } = this.state;
	    editHcemployeesData[e.target.name] = e.target.value;
	    this.setState({ editHcemployeesData });
	};
	editHcemployees=(id,first_name,last_name,email,phone)=>{
		this.setState({
			editHcemployeesData:{ id,first_name,last_name,email,phone },
			editHcemployeesModal:!this.state.editHcemployeesModal
		})
	}
	updateHcemployees = () => {
		let{
			id,first_name,last_name,email,phone
		} = this.state.editHcemployeesData;
		this.setState({
			isLoading:true,
		});
        axios
          .post(
            "http://localhost:8000/api/create_hcemployees",
            {
				id,first_name,last_name,email,phone
			}
          )
          .then((response) => {
          	this.getHcemployees()
            this.setState(
              {
                editHcemployeesModal: false,
              	editHcemployeesData: { first_name, last_name, email, phone },
              	isLoading:false,
              }
     		);
          })
          .catch((error) =>{
          	this.setState({isLoading:false})
          	console.log(error.response);
          });
	};

	deletHcemployees = (id) => {
        this.setState({
          isLoading: true,
        });
        axios
          .delete("http://localhost:8000/api/hcemployees/" + id)
          .then((response) => {
            this.setState({
              isLoading: false,
            });
            this.getHcemployees();
          })
          .catch((error) => {
            this.setState({
              isLoading: false,
            });
          });
      };
    
  	render() {
	    const { newHcemployeesData, editHcemployeesData, noDataFound, hcemployees} = this.state;
	      let hcemployeesDetails = [];
	      if (hcemployees.length) {
	        hcemployeesDetails = hcemployees.map((hcemployees) => {
	          return (
	            <tr key={hcemployees.id}>
	              <td>{hcemployees.id}</td>
	              <td>{hcemployees.first_name}</td>
	              <td>{hcemployees.last_name}</td>
	              <td>{hcemployees.full_name}</td>
	              <td>{hcemployees.email}</td>
	              <td>{hcemployees.phone}</td>
	              <td>
	                <Button
	                  color="success"
	                  className="mr-3"
	                  size="sm"
	                  onClick={()=>
	                  	this.editHcemployees(

	                  		hcemployees.id,
	                  		hcemployees.first_name,
	                  		hcemployees.last_name,
	                  		hcemployees.email,
	                  		hcemployees.phone
	                  		)}
	                >
	                  Edit
	                </Button>
	                <Button
	                  color="danger"
	                  size="sm"
	                  onClick={()=>
	                  	this.deletHcemployees(hcemployees.id)
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
	           	<h4 className="font-weight-bold">Hcemployees Register</h4>
	           	<div className="row"> 
		           <div className="col-xl-3 col-sm-12 col-md-3">
		           <Link to="/dashboard">
						<Button 
						className="float-right mb-4" 
						color="primary">
						Dashboard
						</Button>
		        	</Link> </div>{" "}
		       		{/* Model for Adding Hcemployees Record */}
		       		<div className="">
		           	<AddHcemployees
		                toggleNewHcemployeesModal={this.toggleNewHcemployeesModal}
		                newHcemployeesModal={this.state.newHcemployeesModal}
		                onChangeAddHcemployeesHandler={this.onChangeAddHcemployeesHandler}
		                addHcemployees={this.addHcemployees}
		                newHcemployeesData={newHcemployeesData}
		          	/>{" "}
		          	</div>
		         </div>
	          {/* Model for Adding Hcemployees Record */}
	           <EditHcemployees
	                toggleEditHcemployeesModal={this.toggleEditHcemployeesModal}
		            editHcemployeesModal={this.state.editHcemployeesModal}
		            onChangeEditHcemployeesHanler={this.onChangeEditHcemployeesHanler}
		            editHcemployees={this.editHcemployees}
		            editHcemployeesData={editHcemployeesData}
		            updateHcemployees={this.updateHcemployees}
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
	          {hcemployees.length === 0 ? (
	            <tbody>
	              <h3>{noDataFound}</h3>
	            </tbody>
	          ) : (
	            <tbody>{hcemployeesDetails}</tbody>
	          )}
	        </Table>
	      </div>
	    );
  	}
}