import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";
import {Link} from "react-router-dom";
import AddStock from '../stock/addstock';
import EditStock from '../stock/editstock';


export default class Stock extends Component {
    constructor(props){
        super(props);
        this.state = {
            stock: [],
            newStockData: {
              first_name: "",
              last_name: "",
              email: "",
              phone: "",
            },
            isLoading: false,
            status: "",
            newStockModal: false,
            editStockData: {
            id: "",
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
          },
          editStockModal: false,
          noDataFound: "",
        }
    }

    componentDidMount() {
        this.getStock();
      }      
    getStock() {
    const user =JSON.parse(localStorage.getItem("userData"));
    axios.get("http://localhost:8000/api/hc_stock/"+user.hc_id).then((response) => {
        if (response.status === 200) {
        this.setState({
            stock: response.data.data ? response.data.data : [],
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

    toggleNewStockModal = () => {
        this.setState({
          newStockModal: !this.state.newStockModal,
        });
      };
    onChangeAddStockHandler = (e) => {
        let { newStockData } = this.state;
        newStockData[e.target.name] = e.target.value;
        this.setState({ newStockData });
    };
    addStock = () => {
        axios
          .post(
            "http://localhost:8000/api/create_stock",
            this.state.newStockData
          )
          .then((response) => {
            const { stock } = this.state;
            const newStock = [...stock];
            newStock.push(response.data);
            this.setState(
              {
                stock: newStock,
                newStockModal: false,
                newStockData: {
                  first_name: "",
                  last_name: "",
                  email: "",
                  phone: "",
                },
              },
              () => this.getStock()
            );
          });
	};
	toggleEditStockModal = () => {
	this.setState({
	  editStockModal: !this.state.editStockModal,
	});
	};
	onChangeEditStockHandler = (e) => {
	    let { editStockData } = this.state;
	    editStockData[e.target.name] = e.target.value;
	    this.setState({ editStockData });
	};
	editStock=(id,first_name,last_name,email,phone)=>{
		this.setState({
			editStockData:{ id,first_name,last_name,email,phone },
			editStockModal:!this.state.editStockModal
		})
	}
	updateStock = () => {
		let{
			id,first_name,last_name,email,phone
		} = this.state.editStockData;
		this.setState({
			isLoading:true,
		});
        axios
          .post(
            "http://localhost:8000/api/create_stock",
            {
				id,first_name,last_name,email,phone
			}
          )
          .then((response) => {
          	this.getStock()
            this.setState(
              {
                editStockModal: false,
              	editStockData: { first_name, last_name, email, phone },
              	isLoading:false,
              }
     		);
          })
          .catch((error) =>{
          	this.setState({isLoading:false})
          	console.log(error.response);
          });
	};

	deletStock = (id) => {
        this.setState({
          isLoading: true,
        });
        axios
          .delete("http://localhost:8000/api/stock/" + id)
          .then((response) => {
            this.setState({
              isLoading: false,
            });
            this.getStock();
          })
          .catch((error) => {
            this.setState({
              isLoading: false,
            });
          });
      };
    
  	render() {
	    const { newStockData, editStockData, noDataFound, stock} = this.state;
	      let stockDetails = [];
	      if (stock.length) {
	        stockDetails = stock.map((stock) => {
	          return (
	            <tr key={stock.id}>
	              <td>{stock.id}</td>
	              <td>{stock.name}</td>
	              <td>{stock.quantity}</td>
	              <td>{stock.price}</td>
	              <td>{stock.treats}</td>
	              <td>{stock.date_of_entry}</td>
	              <td>
	                <Button
	                  color="success"
	                  className="mr-3"
	                  size="sm"
	                  onClick={()=>
	                  	this.editStock(
	                  		stock.id,
	                  		stock.name,
	                  		stock.quantity,
	                  		stock.price,
	                  		stock.treats
	                  		)}
	                >
	                  Edit
	                </Button>
	                <Button
	                  color="danger"
	                  size="sm"
	                  onClick={()=>
	                  	this.deletStock(stock.id)
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
	           	<h4 className="font-weight-bold">Stocked Drugs</h4>
		           <div className="col-xl-3 col-sm-12 col-md-3">
		           <Link to="/dashboard">
						<Button 
						className="float-right mb-4" 
						color="primary">
						Dashboard
						</Button>
		        	</Link> </div>{" "}
		       		{/* Model for Adding Drugs Record */}
		       		<div className="">
		           	<Link to="/addstock">
			           	<Button
		                  color="primary"
		                  btn-primary
		                >
		                	Stock Drugs
		                </Button>
	                </Link>
		          	</div>
		         </div>
	          {/* Model for Adding Stock Record */}
	           <EditStock
	                toggleEditStockModal={this.toggleEditStockModal}
		            editStockModal={this.state.editStockModal}
		            onChangeEditStockHanler={this.onChangeEditStockHanler}
		            editStock={this.editStock}
		            editStockData={editStockData}
		            updateStock={this.updateStock}
	          />
	        <Table>
	          <thead>
	            <tr>
	              <th>#</th>
	              <th>Drug</th>
	              <th>Quantity</th>
	              <th>Price</th>
	              <th>Drug Treats</th>
	              <th>Last stocked on</th>
	              <th>Actions</th>
	            </tr>
	          </thead>
	          {stock.length === 0 ? (
	            <tbody>
	              <h3>{noDataFound}</h3>
	            </tbody>
	          ) : (
	            <tbody>{stockDetails}</tbody>
	          )}
	        </Table>
	      </div>
	    );
  	}
}