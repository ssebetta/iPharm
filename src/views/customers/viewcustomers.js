import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";
import {Link} from "react-router-dom";
import AddCustomers from '../customers/addcustomers';
import EditCustomers from '../customers/editcustomers';


export default class Customers extends Component {
    constructor(props){
        super(props);
        const user =JSON.parse(localStorage.getItem("userData"));
        this.state = {
            customers: [],
            newCustomersData: {
              first_name: "",
              last_name: "",
              email: "",
              phone: "",
            },
            isLoading: false,
            status: "",
            newCustomersModal: false,
            editCustomersData: {
            id: "",
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
          },
          editCustomersModal: false,
          noDataFound: "",
        }
    }

    componentDidMount() {
        this.getCustomers();
      }      
    getCustomers() {
    	const user =JSON.parse(localStorage.getItem("userData"));
    axios.get("http://localhost:8000/api/pharm_customers/"+user.pharm_id).then((response) => {
        if (response.status === 200) {
        this.setState({
            customers: response.data.data ? response.data.data : [],
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

    toggleNewCustomersModal = () => {
        this.setState({
          newCustomersModal: !this.state.newCustomersModal,
        });
      };
    onChangeAddCustomersHandler = (e) => {
        let { newCustomersData } = this.state;
        newCustomersData[e.target.name] = e.target.value;
        this.setState({ newCustomersData });
    };
    addCustomers = () => {
        axios
          .post(
            "http://localhost:8000/api/create_customers",
            this.state.newCustomersData
          )
          .then((response) => {
            const { customers } = this.state;
            const newCustomers = [...customers];
            newCustomers.push(response.data);
            this.setState(
              {
                customers: newCustomers,
                newCustomersModal: false,
                newCustomersData: {
                  first_name: "",
                  last_name: "",
                  email: "",
                  phone: "",
                },
              },
              () => this.getCustomers()
            );
          });
	};
	toggleEditCustomersModal = () => {
	this.setState({
	  editCustomersModal: !this.state.editCustomersModal,
	});
	};
	onChangeEditCustomersHandler = (e) => {
	    let { editCustomersData } = this.state;
	    editCustomersData[e.target.name] = e.target.value;
	    this.setState({ editCustomersData });
	};
	editCustomers=(id,first_name,last_name,email,phone)=>{
		this.setState({
			editCustomersData:{ id,first_name,last_name,email,phone },
			editCustomersModal:!this.state.editCustomersModal
		})
	}
	updateCustomers = () => {
		let{
			id,first_name,last_name,email,phone
		} = this.state.editCustomersData;
		this.setState({
			isLoading:true,
		});
        axios
          .post(
            "http://localhost:8000/api/add_customers",
            {
				id,first_name,last_name,email,phone
			}
          )
          .then((response) => {
          	this.getCustomers()
            this.setState(
              {
                editCustomersModal: false,
              	editCustomersData: { first_name, last_name, email, phone },
              	isLoading:false,
              }
     		);
          })
          .catch((error) =>{
          	this.setState({isLoading:false})
          	console.log(error.response);
          });
	};

	deletCustomers = (id) => {
        this.setState({
          isLoading: true,
        });
        axios
          .delete("http://localhost:8000/api/customers/" + id)
          .then((response) => {
            this.setState({
              isLoading: false,
            });
            this.getCustomers();
          })
          .catch((error) => {
            this.setState({
              isLoading: false,
            });
          });
      };
    
  	render() {
	    const { newCustomersData, editCustomersData, noDataFound, customers} = this.state;
	      let customersDetails = [];
	      if (customers.length) {
	        customersDetails = customers.map((customers) => {
	          return (
	            <tr key={customers.id}>
	              <td>{customers.id}</td>
	              <td>{customers.name}</td>
	              <td>{customers.buys}</td>
	              <td>{customers.contact}</td>
	              <td>{customers.location}</td>
	              <td>
	                <Button
	                  color="success"
	                  className="mr-3"
	                  size="sm"
	                  onClick={()=>
	                  	this.editCustomers(

	                  		customers.id,
	                  		customers.first_name,
	                  		customers.last_name,
	                  		customers.email,
	                  		customers.phone
	                  		)}
	                >
	                  Edit
	                </Button>
	                <Button
	                  color="danger"
	                  size="sm"
	                  onClick={()=>
	                  	this.deletCustomers(customers.id)
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
	           	<div className="row"> 
	           	<h4 className="font-weight-bold">My Customers</h4>
		           <div className="col-xl-3 col-sm-12 col-md-3">
		           <Link to="/dashboard">
						<Button 
						className="float-right mb-4" 
						color="primary">
						Dashboard
						</Button>
		        	</Link> </div>{" "}
		       		{/* Model for Adding Customer Record */}
		       		<div className="">
		           	<Link to="/addcustomers">
			           	<Button
		                  color="primary"
		                  btn-primary
		                >
		                	Add Customer
		                </Button>
	                </Link>
		          	</div>
		         </div>
	          {/* Model for Adding Customers Record */}
	           <EditCustomers
	                toggleEditCustomersModal={this.toggleEditCustomersModal}
		            editCustomersModal={this.state.editCustomersModal}
		            onChangeEditCustomersHanler={this.onChangeEditCustomersHanler}
		            editCustomers={this.editCustomers}
		            editCustomersData={editCustomersData}
		            updateCustomers={this.updateCustomers}
	          />
	        <Table>
	          <thead>
	            <tr>
	              <th>#</th>
	              <th>Name</th>
	              <th>Buys</th>
	              <th>contact</th>
	              <th>Location</th>
	              <th>Actions</th>
	            </tr>
	          </thead>
	          {customers.length === 0 ? (
	            <tbody>
	              <h3>{noDataFound}</h3>
	            </tbody>
	          ) : (
	            <tbody>{customersDetails}</tbody>
	          )}
	        </Table>
	      </div>
	    );
  	}
}