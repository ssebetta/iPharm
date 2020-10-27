import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import drug_image from './germinate/images/pills-384846_640.jpg';

export default class Cart extends Component {
  constructor(props){
    super(props);
    const user =JSON.parse(localStorage.getItem("userData"));
    const drug_id = this.props.match.params.id;
    this.state = {
      drug: [],
      newOrderData: {
          drug: this.props.match.params.name,
          drug_id: this.props.match.params.id,
          quantity: "",
          total_price: this.props.match.params.price,
          buyer:"",
          hc_id:user.hc_id,
          contact:"",
          location:"",
          pharm_id: this.props.match.params.pharm_id,
          isLoading: "",
      },
      isLoading: false,
      status: "",
      noDataFound: ""
    }
  }
  componentDidMount() {
      this.getDrugDetails();
  }      
  getDrugDetails() {
    const drug_id = this.props.match.params.id;
    axios.get("http://localhost:8000/api/drug_info/"+drug_id).then((response) => {
        if (response.status === 200) {
        this.setState({
            drug: response.data.data ? response.data.data : [],
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
        const { newOrderData } = this.state;
        newOrderData[e.target.name] = e.target.value;
        this.setState({ newOrderData })
    };
    addOrders = (e) => {
      const user =JSON.parse(localStorage.getItem("userData"));
        e.preventDefault();
        this.setState({isLoading:true});
        axios
          .post(
            "http://localhost:8000/api/add_orders",
            this.state.newOrderData
          )
          .then((response) => {
            this.setState({isLoading:false});
            if (response.data.status === 200) 
            {
              this.setState(
              {
                msg:response.data.message,
                newOrderData:{
                  drug: "",
                  drug_id: "",
                  quantity: "",
                  total_price: "",
                  buyer:"",
                  hc_id:"",
                  contact:"",
                  location:"",
                  pharm_id:""
                },
              });
              setTimeout(()=>{
                this.setState({msg:""});
              }, 2000);
              alert('Your order has been sent to the seller. If you have an account, Click View Orders.');
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
    const {drug} = this.state;
    return (
      <div className="">
        <div className="" style={{backgroundColor:"#cc3366"}}>
          <div className="w3_agile_logo">
              <h1><Link to="/"><span style={{color:'white'}}>i</span>Dagala</Link></h1>
            </div>
          <div className="agile_social_icons_banner">
            <ul className="agileits_social_list">
              <li><Link to="/shop" className="w3_agile_dribble"><i className="fa fa-dribbble" aria-hidden="true" /> Drug Shop</Link></li>
              <li><Link to="/dashboard" className="w3_agile_dribble"><i className="fa fa-dribbble" aria-hidden="true" /> Dashboard</Link></li>
              <li><Link to="/register" className="w3_agile_dribble"><i className="fa fa-dribbble" aria-hidden="true" /> Sign Up</Link></li>
              <li><Link to="/login" className="w3_agile_vimeo"><i className="fa fa-dribbble" aria-hidden="true" /> Login</Link></li>
              <li><Link to="/cart" className="w3_agile_vimeo"><i className="fa fa-shopping-cart" aria-hidden="true" /> My cart</Link></li>
            </ul>
          </div>
          <div className="agileits_w3layouts_menu">
            <div className="shy-menu">
              <Link className="shy-menu-hamburger">
                <span className="layer top" />
                <span className="layer mid" />
                <span className="layer btm" />
              </Link>
              <div className="shy-menu-panel">
                <nav className="menu menu--horatio link-effect-8" id="link-effect-8">
                  <ul className="w3layouts_menu__list">
                    <li className=""><Link to="/">Home</Link></li>
                    <li className="active"><Link to="/">Shop</Link></li>
                    <li><Link to="/register">Sign Up</Link></li> 
                    <li><Link to="/login">Login</Link></li> 
                    <li><Link to="/contact">Contact Us</Link></li>
                  </ul>
                </nav>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="container">
            <h3 className="text-center" style={{padding:'5px',fontSize:'25px'}}>Add to cart</h3>
            <div className="jumbotron">
              <div className="col-md-3" key={drug.id} style={{marginTop:'5px'}}>
                <div className="">
                    <img src={drug_image} alt={drug.name} style={{width:'100%', height:'150px'}} className="img-responsive"/>
                    <p><span>Drug: </span><span>{drug.name}</span></p>
                </div>
                <div className="card-content">
                    <p><span>Seller: </span>{drug.pharm_id}</p>
                    <p><b>Price: {drug.price}UGX</b></p>
                </div>
              </div>
              <div className="col-md-6">
                <Form className="jumbotron">
                  <FormGroup>
                  <Label for="buyer">Your Name</Label>
                    <Input
                      type="text"
                      name="buyer"
                      value={this.state.newOrderData.buyer}
                onChange={this.onChangeHandler} 
                    />
                  </FormGroup>
                  <FormGroup>
                  <Label for="contact">Your Contact</Label>
                    <Input
                      type="text"
                      name="contact"
                      value={this.state.newOrderData.contact}
                      onChange={this.onChangeHandler} 
                    />
                  </FormGroup>
                  <FormGroup>
                  <Label for="location">Your Location</Label>
                    <Input
                      type="text"
                      name="location"
                      value={this.state.newOrderData.location}
                      onChange={this.onChangeHandler}
                    />
                  </FormGroup>
                  <FormGroup>
                  <Label for="buyer">Quantity</Label>
                    <Input
                      type="integer"
                      name="quantity"
                      value={this.state.newOrderData.quantity}
                      onChange={this.onChangeHandler} 
                    />
                  </FormGroup>
                  <div className="row">
                    <FormGroup>
                      <Button 
                        color="primary" 
                        onClick={this.addOrders}>
                       Make Order
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
                  </div>
                </Form>
              </div>
            </div>
        </div>
      </div>
    );
  }
}