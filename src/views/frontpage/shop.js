import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Form, FormGroup, Input } from "reactstrap";
import Cart from './cart';
import drug_image from './germinate/images/pills-384846_640.jpg';

export default class Shop extends Component {
  constructor(props){
    super(props);
    this.state = {
        drugs: [],
        isLoading: false,
        status: "",
        noDataFound: "",
    }
  }

  componentDidMount() {
      this.getDrugs();
  }      
  getDrugs() {
    const user =JSON.parse(localStorage.getItem("userData"));
    axios.get("http://localhost:8000/api/all_drugs/").then((response) => {
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

  addToCart = (props)=>{
    this.props.history.push({
    pathname: '/cart'
  })
    }

  render() {
    const {drugs} = this.state;
    let drugsDetails=drugs.map(item=>{
      return(
          <div className="col-md-3" key={item.id} style={{marginTop:'5px'}}>
            <div className="">
                <img src={drug_image} alt={item.name} style={{width:'100%', height:'150px'}} className="img-responsive"/>
                <span className="">{item.name}</span>
            </div>
            <div className="card-content">
                <p><span>Seller: </span>{item.pharm_id}</p>
                <p><b>Price: {item.price}UGX</b></p>
            </div>
            <div className="card-content">
              <Link to={{pathname:`/cart/${item.id}/${item.price}/${item.pharm_id}/${item.name}`}}>
                <Button 
                className="btn-danger" 
                style={{width:'100%'}}
                >
                <span><span className="btn fa fa-shopping-cart" style={{color:'white'}}></span>Add to Cart</span>
                </Button>
              </Link>
            </div>
          </div>
      )
    })
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
                <h3 className="text-center" style={{padding:'5px',fontSize:'25px'}}> Drug Shop</h3>
                <Form className="jumbotron">
                   <FormGroup>
                    <Input 
                      id="item"
                      type="search"
                      name="item"
                      style={{color:'#212121', width:'80%',height:'50px',fontSize:'20px'}}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Button 
                      color="primary"
                      style={{width:'30%',height:'40px',fontSize:'20px'}} 
                      >
                     <span className="fa fa-search"></span> Search for Drugs
                     </Button>
                  </FormGroup>
                </Form>
                <div className="box">
                    {drugsDetails}
                </div>
            </div>
      </div>
    );
  }
}