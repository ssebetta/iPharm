import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";
import {Link} from "react-router-dom";
import AddOrders from '../orders/addorders';
import EditOrders from '../orders/editorders';

export default class Orders extends Component {
    constructor(props){
        super(props);
        this.state = {
            orders: [],
            isLoading: false,
            status: "",
            editOrdersData: {
            id: "",
            drug: "",
			quantity: "",
			total_price: "",
			buyer: "",
			hc_id: "",
			contact: "",
			location: "",
			 pharm_id: "",
          },
          editOrdersModal: false,
          noDataFound: "",
        }
        
    }
    componentDidMount() {
        this.getOrders();
      }      
    getOrders() {
    	const user =JSON.parse(localStorage.getItem("userData"));
      if (user.hc_id) {
        axios.get("http://localhost:8000/api/hc_orders/"+user.hc_id).then((response) => {
            if (response.status === 200) {
            this.setState({
                orders: response.data.data ? response.data.data : [],
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
      else
      {
        axios.get("http://localhost:8000/api/pharm_orders/"+user.pharm_id).then((response) => {
            if (response.status === 200) {
            this.setState({
                orders: response.data.data ? response.data.data : [],
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
    } 
    toggleNewOrderModal = () => {
        this.setState({
          newOrderModal: !this.state.newOrderModal,
        });
      };
    onChangeAddOrdersHandler = (e) => {
        let { newOrderData } = this.state;
        newOrderData[e.target.name] = e.target.value;
        this.setState({ newOrderData });
    };
    addOrders = (drug_id,pharm_id,hc_id) => {
        axios
          .post(
            "http://localhost:8000/api/add_orders",
            this.state.newOrderData
          )
          .then((response) => {
            const { orders } = this.state;
            const newOrder = [...orders];
            newOrder.push(response.data);
            this.setState(
              {
                orders: newOrder,
                newOrderModal: false,
                newOrderData: {
                drug: "",
				drug_id: "",
				quantity: "",
				total_price: "",
				buyer: "",
				hc_id: "",
				contact: "",
				location: "",
				pharm_id: "",
                },
              },
              () => this.getOrders()
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
	editOrders=(id,drug,drug_id,quantity,total_price,buyer,hc_id,contact,buyer_location,pharm_id)=>{
		this.setState({
			editOrdersData:{ 
							id,
							drug,
				            drug_id,
				            quantity,
				            total_price,
				            buyer,
				            hc_id,
				            contact,
				            buyer_location,
				            pharm_id,
			 },
			editOrdersModal:!this.state.editOrdersModal
		})
	}
	updateOrders = () => {
		let{
				id,
				drug,
              drug_id,
              quantity,
              total_price,
              buyer,
              hc_id,
              contact,
              buyer_location,
              pharm_id,
		} = this.state.editOrdersData;
		this.setState({
			isLoading:true,
		});
        axios
          .post(
            "http://localhost:8000/api/add_orders",
            {
				id,
				drug,
              drug_id,
              quantity,
              total_price,
              buyer,
              hc_id,
              contact,
              buyer_location,
              pharm_id,
			}
          )
          .then((response) => {
          	this.getOrders()
            this.setState(
              {
                editOrdersModal: false,
              	editOrdersData: { 	
              						drug,
              						quantity,
      								total_price,
              						buyer,
              						hc_id,
              						contact,
          					    	buyer_location, 
          						},
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
          .delete("http://localhost:8000/api/delete_orders/" + id)
          .then((response) => {
            this.setState({
              isLoading: false,
            });
            this.getOrders();
          })
          .catch((error) => {
            this.setState({
              isLoading: false,
            });
          });
      };
  	render() {
	    const { newOrderData, editOrdersData, noDataFound, orders} = this.state;
	      let ordersDetails = [];
	      if (orders.length) {
	        ordersDetails = orders.map((orders) => {
	          return (
	            <tr key={orders.id}>
	              <td>{orders.id}</td>
	              <td>{orders.drug}</td>
	              <td>{orders.quantity}</td>
	              <td>{orders.total_price*orders.quantity}</td>
	              <td>{orders.buyer}</td>
	              <td>{orders.contact}</td>
	              <td>{orders.location}</td>
	              <td>{orders.created_at}</td>
	              <td>{orders.status}</td>
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
	                  Confirm Order
	                </Button>
	                <Button
	                  color="danger"
	                  size="sm"
	                  onClick={()=>
	                  	this.deletOrders(orders.id)
	                  }
	                >
	                  Reject Order
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
	           	<h4 className="font-weight-bold">Orders</h4>
	           	<div className="row"> 
		           <div className="col-xl-3 col-sm-12 col-md-3">
		           <Link to="/dashboard">
						<Button 
						className="float-right mb-4" 
						color="primary">
						Dashboard
						</Button>
		        	</Link> </div>{" "}
		       		{/* Model for Adding Orders */}
		       		<div className="">
		       		<Link to="/addorders">
			           	<Button
		                  color="primary"
		                  btn-primary
		                >
		                Add Orders
		                </Button>
	                </Link>
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
	              <th>Drug</th>
	              <th>Quantity</th>
	              <th>Total Price</th>
	              <th>Buyer</th>
	              <th>Contact</th>
	              <th>Location</th>
	              <th>Date of Order</th>
	              <th>Status</th>
	              <th>Actions</th>
	            </tr>
	          </thead>
	          {orders.length === 0 ? (
	            <tbody>
	              {noDataFound}
	            </tbody>
	          ) : (
	            <tbody>{ordersDetails}</tbody>
	          )}
	        </Table>
	      </div>
	    );
  	}
}