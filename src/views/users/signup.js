import React, { Component } from "react";
import { Table, Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { Redirect, Router,Link } from "react-router-dom";

export default class Signup extends Component {
  userData;
  constructor(props)
  {
    super(props);
    this.state ={
      signupData:{
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        type: "",
        name: "",
        location: "",
        contact: "",
        isLoading: "",
      },
      msg: "",
    };
  }

  onChangeHandler = (e, key) =>{
    const {signupData} = this.state;
    signupData[e.target.name] = e.target.value;
    this.setState({ signupData })
  };

  onSubmitHandler = (e) =>{
    e.preventDefault();
    this.setState({isLoading:true});
    axios
      .post("https://idagalabknd.fungardens.biz/public/api/user_signup", this.state.signupData)
      .then((response) => {
        this.setState({isLoading:false});
        if (response.data.status === 200) 
        {
          this.setState(
          {
            msg:response.data.message,
            signupData:{
              first_name: "",
              last_name: "",
              email: "",
              password: "",
              type: "",
              name: "",
              location: "",
              contact: "",
              isLoading: "",
            },
          });
          setTimeout(()=>{
            this.setState({msg:""});
          }, 2000);
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
        }
      });
  };
  render(){
    return (
      <div className="banner">
        <div className="container">
          <div className="w3_agileits_banner_main_grid">
            <div className="w3_agile_logo">
                <h1><Link to="/"><span style={{color:'white'}}>i</span>Dagala<i>easy access of medical drus</i></Link></h1>
              </div>
            <div className="agile_social_icons_banner">
              <ul className="agileits_social_list">
                <li><Link to="/shop" className="w3_agile_dribble"><i className="fa fa-dribbble" aria-hidden="true" /> Drug Shop</Link></li>
                <li><Link to="/shop" className="w3_agile_dribble"><i className="fa fa-dribbble" aria-hidden="true" /> Dashboard</Link></li>
                <li><Link to="/register" className="w3_agile_dribble"><i className="fa fa-dribbble" aria-hidden="true" /> Sign Up</Link></li>
                <li><Link to="/login" className="w3_agile_vimeo"><i className="fa fa-dribbble" aria-hidden="true" /> Login</Link></li>
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
                      <li className="active"><Link to="/">Home</Link></li>
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
          <div className="limiter">
            <div className="container-login100">
              <div className="wrap-login100 p-t-90 p-b-30" style={{marginTop: '-15%'}}>
                <form className="login100-form validate-form">
                  <div align="center">
                    {/*?php if(isset($error_message)):?*/}
                    <p className="w3-text-red">
                      {/*?=$error_message;?*/}
                    </p><br />
                    {/*?php endif;?*/}
                  </div>
                  <div className="text-center p-t-55 p-b-30">
                    <span className="txt1">
                      <span style={{color: '#ffffff'}}>Sign Up</span>
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter your First Name">
                    <input className="input100" 
                            type="text" 
                            name="first_name" 
                            placeholder="First Name" 
                            value={this.state.signupData.first_name}
                            onChange={this.onChangeHandler} 
                            required />
                    <span className="focus-input100" />
                  </div>
                  <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter your Last Name">
                    <input className="input100" 
                            type="text" 
                            name="last_name" 
                            placeholder="Last Name"
                            value={this.state.signupData.last_name}
                            onChange={this.onChangeHandler} 
                            required />
                    <span className="focus-input100" />
                  </div>
                  <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter email: ex@abc.xyz">
                    <input className="input100" 
                            type="text" 
                            name="email" 
                            placeholder="Email" 
                            value={this.state.signupData.email}
                            onChange={this.onChangeHandler} 
                            required />
                    <span className="focus-input100" />
                  </div>
                  <div className="wrap-input100 validate-input m-b-20" data-validate="Please enter password">
                    <span className="btn-show-pass">
                      <i className="fa fa fa-eye" />
                    </span>
                    <input className="input100" 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            value={this.state.signupData.password}
                            onChange={this.onChangeHandler} 
                            required />
                    <span className="focus-input100" />
                  </div><br />
                  <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter Name of Shop or Health Center">
                    <select className="input100" 
                            type="text" 
                            name="type" 
                            placeholder="Do you have a Drug Shop or Health Center" 
                            value={this.state.signupData.type}
                            onChange={this.onChangeHandler} 
                            required>
                      <option value="">---Register as</option>
                      <option value="drug_shop">A Drug Shop or Pharmacy</option>
                      <option value="health_center">A Health Center</option>
                    </select>
                    <span className="focus-input100" />
                  </div>
                  <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter Name of Shop or Health Center">
                    <input className="input100" 
                            type="text" 
                            name="name" 
                            placeholder="Name of Shop or Health Center" 
                            value={this.state.signupData.name}
                            onChange={this.onChangeHandler} 
                            required />
                    <span className="focus-input100" />
                  </div>
                  <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter a Location">
                    <input className="input100" 
                            type="text" 
                            name="location" 
                            placeholder="Location"
                            value={this.state.signupData.location}
                            onChange={this.onChangeHandler}  
                            required />
                    <span className="focus-input100" />
                  </div>
                  <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter a contact">
                    <input className="input100" 
                            type="text" 
                            name="contact" 
                            placeholder="Contact" 
                            value={this.state.signupData.contact}
                            onChange={this.onChangeHandler} 
                            required />
                    <span className="focus-input100" />
                  </div>
                  <div className="container-login100-form-btn">
                    <button className="login100-form-btn">
                      Signup
                    </button>
                  </div><br /><br />
                  <div>
                    <Link to="#" className="btn-login-with bg1 m-b-10">
                      <i className="fa fa-facebook-official" />
                      Sign Up with Facebook<br />
                      coming soon
                    </Link>
                    <Link to="#" className="btn-login-with bg2">
                      <i className="fa fa-google" />
                      Sign Up with Google<br />
                      coming soon
                    </Link>
                  </div>
                  <br />
                  <div className="flex-col-c ">
                    <span className="txt2 p-b-10">
                      <span style={{color: 'white'}}>Already have an account?</span>
                    </span>
                    <Link to="/login" className="txt3 bo1 hov1">
                      <span style={{color: 'white'}}>Login now</span>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}