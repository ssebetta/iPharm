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

export default class AddStock extends Component {
  constructor(props){
      super(props);
      const user =JSON.parse(localStorage.getItem("userData"));
      this.state = {
          newStockData: {
              name: "",
              quantity: "",
              price: "",
              treats: "",
              hc_id:user.hc_id,
              isLoading: "",
          },
          status: "",
      }
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
   onChangeHandler = (e,key) => {
        const { newStockData } = this.state;
        newStockData[e.target.name] = e.target.value;
        this.setState({ newStockData })
    };
    addStock = (e) => {
      const user =JSON.parse(localStorage.getItem("userData"));
        e.preventDefault();
        this.setState({isLoading:true});
        axios
          .post(
            "http://localhost:8000/api/add_stock",
            this.state.newStockData
          )
          .then((response) => {
            this.setState({isLoading:false});
            if (response.data.status === 200) 
            {
              this.setState(
              {
                msg:response.data.message,
                newStockData:{
                  name: "",
                  quantity: "",
                  price: "",
                  treats: "",
                  hc_id:"",
                },
              });
              setTimeout(()=>{
                this.setState({msg:""});
              }, 2000);
              alert('Stock Successfully Added to List. Click View Stock.');
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
              alert('Failed to Stock Drug');
            }
           
          });
    };
  render() {
    const isLoading =this.state.isLoading;
    return (
      <div className="Full container mt-4">
        <div className="row"> 
          <h4 className="font-weight-bold">Stock Drugs</h4>
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
            <Link to="/viewstock">
              <Button
                color="primary"
                btn-primary
              >
                View Stock
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
                value={this.state.newStockData.name}
                onChange={this.onChangeHandler} 
              />
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup>
              <Label for="quantity">Quantity</Label>
              <Input 
                id="quantity" 
                name="quantity"
                style={{color:'#212121'}}
                placeholder={"e.g 20 boxes"}
                value={this.state.newStockData.quantity}
                onChange={this.onChangeHandler} 
              />
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup>
              <Label for="price">Price</Label>
              <Input 
                id="price" 
                name="price"
                style={{color:'#212121'}}
                value={this.state.newStockData.price}
                onChange={this.onChangeHandler} 
              />
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup>
              <Label for="treats">What does the drug treat?</Label>
              <Input 
                id="treats" 
                type="text"
                name="treats"
                value={this.state.newStockData.treats}
                onChange={this.onChangeHandler}
              />
            </FormGroup>
          </div>
          <FormGroup>
            <Button 
              color="primary" 
              onClick={this.addStock}>
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