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

export default class AddDrugs extends Component {
  constructor(props){
      super(props);
      const user =JSON.parse(localStorage.getItem("userData"));
      this.state = {
          newDrugData: {
              name: "",
              quantity: "",
              price: "",
              photo: "",
              pharm_id: user.pharm_id,
              isLoading: "",
          },
          status: "",
      }
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
   onChangeHandler = (e,key) => {
        const { newDrugData } = this.state;
        newDrugData[e.target.name] = e.target.value;
        this.setState({ newDrugData })
    };
    addDrugs = (e) => {
      const user =JSON.parse(localStorage.getItem("userData"));
        e.preventDefault();
        this.setState({isLoading:true});
        axios
          .post(
            "http://localhost:8000/api/add_drugs",
            this.state.newDrugData
          )
          .then((response) => {
            this.setState({isLoading:false});
            if (response.data.status === 200) 
            {
              this.setState(
              {
                msg:response.data.message,
                newDrugData:{
                  name: "",
                  quantity: "",
                  price: "",
                  photo: "",
                  pharm_id:"",
                },
              });
              setTimeout(()=>{
                this.setState({msg:""});
              }, 2000);
              alert('Drug Successfully Added to Store. Click View Drugs.');
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
              return "failed";
            }
           
          });
    };
  render() {
    const isLoading =this.state.isLoading;
    
    return (
      <div className="Full container mt-4">
        <div className="row"> 
          <h4 className="font-weight-bold">Add Drugs</h4>
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
            <Link to="/viewdrugs">
              <Button
                color="primary"
                btn-primary
              >
                View Drugs
              </Button>
            </Link>
          </div>
        </div>
        <Form className="jumbotron shadow">
          <div className="col-md-6">
            <FormGroup>
              <Label for="name">Name of Drug</Label>
              <Input 
                id="name" 
                name="name"
                style={{color:'#212121'}}
                value={this.state.newDrugData.name}
                onChange={this.onChangeHandler} 
              />
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup>
              <Label for="quantity">Total number</Label>
              <Input 
                id="quantity" 
                name="quantity"
                style={{color:'#212121'}}
                value={this.state.newDrugData.quantity}
                onChange={this.onChangeHandler} 
              />
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup>
              <Label for="price">Price of drug</Label>
              <Input 
                id="price" 
                name="price"
                style={{color:'#212121'}}
                value={this.state.newDrugData.price}
                onChange={this.onChangeHandler} 
              />
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup>
              <Label for="photo">Image of drug</Label>
              <Input 
                id="photo" 
                type="file"
                name="photo"
                value={this.state.newDrugData.photo}
                onChange={this.onChangeHandler}  
              />
            </FormGroup>
          </div>
          <FormGroup>
            <Button 
              color="primary" 
              onClick={this.addDrugs}>
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