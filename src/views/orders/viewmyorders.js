import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";
import {Link} from "react-router-dom";
import AddOrders from '../orderss/addorders';
import EditOrders from '../orderss/editorders';


export default class MyOrders extends Component {
    constructor(props){
        super(props);
        this.state = {
            orderss: [],
            newOrdersData: {
              first_name: "",
              last_name: "",
              email: "",
              phone: "",
            },
            isLoading: false,
            status: "",
            newOrdersModal: false,
            editOrdersData: {
            id: "",
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
          },
          editOrdersModal: false,
          noDataFound: "",
        }
        
    }

    componentDidMount() {
        this.getOrderss();
      }      
    getOrders() {
    axios.get("http://localhost:8000/api/orders").then((response) => {
        if (response.status === 200) {
        this.setState({
            orderss: response.data.data ? response.data.data : [],
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

    toggleNewOrdersModal = () => {
        this.setState({
          newOrdersModal: !this.state.newOrdersModal,
        });
      };
    onChangeAddOrdersHandler = (e) => {
        let { newOrdersData } = this.state;
        newOrdersData[e.target.name] = e.target.value;
        this.setState({ newOrdersData });
    };
    addOrders = () => {
        axios
          .post(
            "http://localhost:8000/api/create_orders",
            this.state.newOrdersData
          )
          .then((response) => {
            const { orderss } = this.state;
            const newOrderss = [...orderss];
            newOrderss.push(response.data);
            this.setState(
              {
                orderss: newOrderss,
                newOrdersModal: false,
                newOrdersData: {
                  first_name: "",
                  last_name: "",
                  email: "",
                  phone: "",
                },
              },
              () => this.getOrderss()
            );
          });
	};
	toggleEditOrdersModal = () => {
	this.setState({
	  editOrdersModal: !this.state.editOrdersModal,
	});
	};
	onChangeEditOrdersHandler = (e) => {
	    let { editOrdersData } = this.state;
	    editOrdersData[e.target.name] = e.target.value;
	    this.setState({ editOrdersData });
	};
	editOrders=(id,first_name,last_name,email,phone)=>{
		this.setState({
			editOrdersData:{ id,first_name,last_name,email,phone },
			editOrdersModal:!this.state.editOrdersModal
		})
	}
	updateOrders = () => {
		let{
			id,first_name,last_name,email,phone
		} = this.state.editOrdersData;
		this.setState({
			isLoading:true,
		});
        axios
          .post(
            "http://localhost:8000/api/create_orders",
            {
				id,first_name,last_name,email,phone
			}
          )
          .then((response) => {
          	this.getOrderss()
            this.setState(
              {
                editOrdersModal: false,
              	editOrdersData: { first_name, last_name, email, phone },
              	isLoading:false,
              }
     		);
          })
          .catch((error) =>{
          	this.setState({isLoading:false})
          	console.log(error.response);
          });
	};

	deletOrders = (id) => {
        this.setState({
          isLoading: true,
        });
        axios
          .delete("http://localhost:8000/api/orders/" + id)
          .then((response) => {
            this.setState({
              isLoading: false,
            });
            this.getOrderss();
          })
          .catch((error) => {
            this.setState({
              isLoading: false,
            });
          });
      };
    
  	render() {
	    const { newOrdersData, editOrdersData, noDataFound, orderss} = this.state;
	      let orderssDetails = [];
	      if (orderss.length) {
	        orderssDetails = orderss.map((orders) => {
	          return (
	            <tr key={orders.id}>
	              <td>{orders.id}</td>
	              <td>{orders.first_name}</td>
	              <td>{orders.last_name}</td>
	              <td>{orders.full_name}</td>
	              <td>{orders.email}</td>
	              <td>{orders.phone}</td>
	              <td>
	                <Button
	                  color="success"
	                  className="mr-3"
	                  size="sm"
	                  onClick={()=>
	                  	this.editOrders(

	                  		orders.id,
	                  		orders.first_name,
	                  		orders.last_name,
	                  		orders.email,
	                  		orders.phone
	                  		)}
	                >
	                  Edit
	                </Button>
	                <Button
	                  color="danger"
	                  size="sm"
	                  onClick={()=>
	                  	this.deletOrders(orders.id)
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
	           	<h4 className="font-weight-bold">Orderss Register</h4>
	           	<div className="row"> 
		           <div className="col-xl-3 col-sm-12 col-md-3">
		           <Link to="/dashbosrd">
						<Button 
						className="float-right mb-4" 
						color="primary">
						Dashbosrd
						</Button>
		        	</Link> </div>{" "}
		       		{/* Model for Adding Orders Record */}
		       		<div className="">
		           	<AddOrders
		                toggleNewOrdersModal={this.toggleNewOrdersModal}
		                newOrdersModal={this.state.newOrdersModal}
		                onChangeAddOrdersHandler={this.onChangeAddOrdersHandler}
		                addOrders={this.addOrders}
		                newOrdersData={newOrdersData}
		          	/>{" "}
		          	</div>
		         </div>
	          {/* Model for Adding Orders Record */}
	           <EditOrders
	                toggleEditOrdersModal={this.toggleEditOrdersModal}
		            editOrdersModal={this.state.editOrdersModal}
		            onChangeEditOrdersHanler={this.onChangeEditOrdersHanler}
		            editOrders={this.editOrders}
		            editOrdersData={editOrdersData}
		            updateOrders={this.updateOrders}
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
	          {orderss.length === 0 ? (
	            <tbody>
	              <h3>{noDataFound}</h3>
	            </tbody>
	          ) : (
	            <tbody>{orderssDetails}</tbody>
	          )}
	        </Table>
	      </div>
	    );
  	}
}