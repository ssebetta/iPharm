import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";
import {Link} from "react-router-dom";
import AddDrugs from '../drugs/adddrugs';
import EditDrugs from '../drugs/editdrugs';


export default class Drugs extends Component {
    constructor(props){
        super(props);
        this.state = {
            drugs: [],
            newDrugsData: {
              name: "",
              quantity: "",
              price: "",
              photo: "",
              pharm_id:""
            },
            isLoading: false,
            status: "",
            newDrugsModal: false,
            editDrugsData: {
            id: "",
            name: "",
              quantity: "",
              price: "",
              photo: "",
              pharm_id:""
          },
          editDrugsModal: false,
          noDataFound: "",
        }
       
    }

    componentDidMount() {
        this.getDrugs();
      }      
    getDrugs() {
   	const user =JSON.parse(localStorage.getItem("userData"));
    axios.get("http://localhost:8000/api/pharm_drugs/"+user.pharm_id).then((response) => {
        if (response.status === 200) {
        this.setState({
            drugs: response.data.data ? response.data.data : [],
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

    toggleNewDrugsModal = () => {
        this.setState({
          newDrugsModal: !this.state.newDrugsModal,
        });
      };
    onChangeAddDrugsHandler = (e) => {
        let { newDrugsData } = this.state;
        newDrugsData[e.target.name] = e.target.value;
        this.setState({ newDrugsData });
    };
    addDrugs = () => {
        axios
          .post(
            "http://localhost:8000/api/add_drugs",
            this.state.newDrugsData
          )
          .then((response) => {
            const { drugs } = this.state;
            const newDrugs = [...drugs];
            newDrugs.push(response.data);
            this.setState(
              {
                drugs: newDrugs,
                newDrugsModal: false,
                newDrugsData: {
                  name: "",
	              quantity: "",
	              price: "",
	              photo: "",
	              pharm_id:""
                },
              },
              () => this.getDrugs()
            );
          });
	};
	toggleEditDrugsModal = () => {
	this.setState({
	  editDrugsModal: !this.state.editDrugsModal,
	});
	};
	onChangeEditDrugsHandler = (e) => {
	    let { editDrugsData } = this.state;
	    editDrugsData[e.target.name] = e.target.value;
	    this.setState({ editDrugsData });
	};
	editDrugs=(id,first_name,last_name,email,phone)=>{
		this.setState({
			editDrugsData:{ id,first_name,last_name,email,phone },
			editDrugsModal:!this.state.editDrugsModal
		})
	}
	updateDrugs = () => {
		let{
			id,first_name,last_name,email,phone
		} = this.state.editDrugsData;
		this.setState({
			isLoading:true,
		});
        axios
          .post(
            "http://localhost:8000/api/add_drugs",
            {
				id,first_name,last_name,email,phone
			}
          )
          .then((response) => {
          	this.getDrugs()
            this.setState(
              {
                editDrugsModal: false,
              	editDrugsData: { first_name, last_name, email, phone },
              	isLoading:false,
              }
     		);
          })
          .catch((error) =>{
          	this.setState({isLoading:false})
          	console.log(error.response);
          });
	};

	deleteDrugs = (id) => {
        this.setState({
          isLoading: true,
        });
        axios
          .delete("http://localhost:8000/api/drugs/" + id)
          .then((response) => {
            this.setState({
              isLoading: false,
            });
            this.getDrugs();
          })
          .catch((error) => {
            this.setState({
              isLoading: false,
            });
          });
      };
    
  	render() {
	    const { newDrugsData, editDrugsData, noDataFound, drugs} = this.state;
	      let drugsDetails = [];
	      if (drugs.length) {
	        drugsDetails = drugs.map((drugs) => {
	          return (
	            <tr key={drugs.id}>
	              <td>{drugs.id}</td>
	              <td>{drugs.photo}</td>
	              <td>{drugs.name}</td>
	              <td>{drugs.quantity}</td>
	              <td>{drugs.price}</td>
	              <td>
	                <Button
	                  color="success"
	                  className="mr-3"
	                  size="sm"
	                  onClick={()=>
	                  	this.editDrugs(

	                  		drugs.id,
	                  		drugs.name,
	                  		drugs.quantity,
	                  		drugs.price,
	                  		drugs.photo
	                  		)}
	                >
	                  Edit
	                </Button>
	                <Button
	                  color="danger"
	                  size="sm"
	                  onClick={()=>
	                  	this.deletDrugs(drugs.id)
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
	           	<h4 className="font-weight-bold">Available Drugs</h4>
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
		           	<Link to="/adddrugs">
			           	<Button
		                  color="primary"
		                  btn-primary
		                >
		                	Add Drugs
		                </Button>
	                </Link>
		          	</div>
		         </div>
	          {/* Model for Adding Drugs Record */}
	           <EditDrugs
	                toggleEditDrugsModal={this.toggleEditDrugsModal}
		            editDrugsModal={this.state.editDrugsModal}
		            onChangeEditDrugsHanler={this.onChangeEditDrugsHanler}
		            editDrugs={this.editDrugs}
		            editDrugsData={editDrugsData}
		            updateDrugs={this.updateDrugs}
	          />
	        <Table>
	          <thead>
	            <tr>
	              <th>#</th>
	              <th>Drug</th>
	              <th>Name</th>
	              <th>Quantity</th>
	              <th>Price</th>
	              <th>Actions</th>
	            </tr>
	          </thead>
	          {drugs.length === 0 ? (
	            <tbody>
	              <h3>{noDataFound}</h3>
	            </tbody>
	          ) : (
	            <tbody>{drugsDetails}</tbody>
	          )}
	        </Table>
	      </div>
	    );
  	}
}