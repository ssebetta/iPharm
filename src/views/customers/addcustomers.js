import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import axios from "axios";
import { Redirect,Link } from "react-router-dom";

export default class AddCustomers extends Component {
  constructor(props){
      super(props);
      const user =JSON.parse(localStorage.getItem("userData"));
      this.state = {
          newCustomerData: {
              name: "",
              buys: "",
              contact: "",
              location: "",
              pharm_id: user.pharm_id,
              isLoading: "",
          },
          status: "",
      }
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
   onChangeHandler = (e,key) => {
        const { newCustomerData } = this.state;
        newCustomerData[e.target.name] = e.target.value;
        this.setState({ newCustomerData })
    };
    addCustomers = (e) => {
      const user =JSON.parse(localStorage.getItem("userData"));
        e.preventDefault();
        this.setState({isLoading:true});
        axios
          .post(
            "http://localhost:8000/api/add_customers",
            this.state.newCustomerData
          )
          .then((response) => {
            this.setState({isLoading:false});
            if (response.data.status === 200) 
            {
              this.setState(
              {
                msg:response.data.message,
                newCustomerData:{
                  name: "",
                  buys: "",
                  contact: "",
                  location: "",
                  pharm_id:"",
                },
              });
              setTimeout(()=>{
                this.setState({msg:""});
              }, 2000);
              alert('Customer Successfully Added to List. Click View Customers.');
            }

            if (response.data.status === "failed") 
            {
              this.setState(
              {
                msg:response.data.message,
              });
              setTimeout(()=>{
                this.setState({msg:""});
              }, 2000);
              alert('Failed to add Customer to List');
            }
           
          });
    };
  render() {
    const isLoading =this.state.isLoading;
    
    return (
      <div className="Full container mt-4">
        <div className="row"> 
          <h4 className="font-weight-bold">Add Customers</h4>
          <div className="col-xl-3 col-sm-12 col-md-3">
            <Link to="/dashboard">
              <Button 
                className="float-right mb-4" 
                color="primary">
                Dashboard
              </Button>
            </Link> 
          </div>{" "}
          <div className="">
            <Link to="/viewcustomers">
              <Button
                color="primary"
                btn-primary
              >
                View Customers
              </Button>
            </Link>
          </div>
        </div>
        <Form className="jumbotron shadow">
          <div className="col-md-6">
            <FormGroup>
              <Label for="name">Name of Customer</Label>
              <Input 
                id="name" 
                name="name"
                style={{color:'#212121'}}
                value={this.state.newCustomerData.name}
                onChange={this.onChangeHandler} 
              />
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup>
              <Label for="buys">What does customer usually buy</Label>
              <Input 
                id="buys" 
                name="buys"
                style={{color:'#212121'}}
                value={this.state.newCustomerData.buys}
                onChange={this.onChangeHandler} 
              />
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup>
              <Label for="contact">Contact</Label>
              <Input 
                id="contact" 
                name="contact"
                style={{color:'#212121'}}
                value={this.state.newCustomerData.contact}
                onChange={this.onChangeHandler} 
              />
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup>
              <Label for="photo">Location</Label>
              <Input 
                id="location" 
                type="text"
                name="location"
                value={this.state.newCustomerData.location}
                onChange={this.onChangeHandler}
              />
            </FormGroup>
          </div>
          <FormGroup>
            <Button 
              color="primary" 
              onClick={this.addCustomers}>
             Store Record
             {isLoading ? (
              <span
              className="spinner-border spinner-border-sm ml-5"
              role="status"
              aria-hidden="true"
              ></span>
              ) : (<span></span>)
            }
             </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}