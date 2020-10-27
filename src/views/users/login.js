import React, { Component } from "react";
import {Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { Redirect, Router,Link } from "react-router-dom";
import "../frontpage/germinate/fonts/Linearicons-Free-v1.0.0/icon-font.min.css";
import "../frontpage/germinate/vendor/animate/animate.css";
import "../frontpage/germinate/vendor/animsition/css/animsition.min.css";
import "../frontpage/germinate/vendor/select2/select2.min.css";
import "../frontpage/germinate/vendor/daterangepicker/daterangepicker.css";
import "../frontpage/germinate/css/util.css";
import "../frontpage/germinate/css/main.css";

export default class Login extends Component {
  userData;
  constructor(props)
  {
    super(props);
    this.state ={
        email: "",
        password: "",
        msg: "",
        isLoading: "",
        redirect: false,
        errMsgEmail:"",
        errMsgPwd:"",
        errMsg:""
    };
  }

  onChangeHandler = (e) =>{
    let name =e.target.name;
    let value = e.target.value;
    let data = {};
    data[name] =value;
    this.setState(data);
  };

  onSubmitHandler = () =>{
    this.setState({isLoading:true});
    axios
      .post("http://localhost:8000/api/user_login", {
        email:this.state.email,
        password:this.state.password,
      })
      .then((response) => {
        this.setState({isLoading:false});
        if (response.data.status === 200) 
        {
          localStorage.setItem("isLoggedin", true);
          localStorage.setItem("userData", JSON.stringify(response.data.data));
          this.setState({
            msg:response.data.message,
            redirect:true,
          });
        }

        if (response.data.status === "failed" && response.data.success === undefined) 
        {
          this.setState(
          {
            errMsgEmail:response.data.validation_error.email,
            errMsgPwd:response.data.validation_error.password,
          });
          setTimeout(()=>{
            this.setState({errMsgEmail:"",errMsgPwd:""});
          }, 2000);
        }
        else if (response.data.status === "failed" && response.data.success === false) 
        {
          this.setState(
          {
            errMsg:response.data.message,
          });
          setTimeout(()=>{
            this.setState({errMsg:""});
          }, 2000);
        }
      }).catch((error)=>{
        console.log(error);
      });
  };
  render(){
    if (this.state.redirect) 
    {
      return <Redirect to="/dashboard"/>
    }
    const login = localStorage.getItem("isLoggedin");
    if(login)
    {
      return <Redirect to="/dashboard"/>
    }
    const isLoading =this.state.isLoading;
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
              <li><Link to="/dashboard" className="w3_agile_dribble"><i className="fa fa-dribbble" aria-hidden="true" /> Dashboard</Link></li>
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
              <div className="wrap-login100 p-t-90 p-b-30" style={{marginTop: '-10%'}}>
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
                      <span style={{color: 'white'}}>Login with email</span>
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter email: ex@abc.xyz">
                    <input className="input100" 
                            type="text" 
                            name="email" 
                            placeholder="Email" 
                            value={this.state.email}
                            onChange={this.onChangeHandler}
                            required />
                    <span className="focus-input100" />
                    <span className="text-danger">{this.state.msg}</span>
                    <span className="text-danger">{this.state.errMsgEmail}</span>
                  </div>
                  <div className="wrap-input100 validate-input m-b-20" data-validate="Please enter password">
                    <span className="btn-show-pass">
                      <i className="fa fa fa-eye" />
                    </span>
                    <input className="input100" 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            value={this.state.password}
                            onChange={this.onChangeHandler}
                            required />
                    <span className="focus-input100" />
                    <span className="text-danger">{this.state.errMsgPwd}</span>
                  </div>
                  <div className="container-login100-form-btn">
                    <Button 
                      className="login100-form-btn"
                      onClick={this.onSubmitHandler}
                      >
                      Login
                      {isLoading ? (
                        <span
                        className="spinner-border spinner-border-sm ml-5"
                        role="status"
                        aria-hidden="true"
                        ></span>
                        ) : (<span></span>)
                      }
                    </Button>
                  </div><br /><br />
                  <div>
                    <Link to="#" className="btn-login-with bg1 m-b-10">
                      <i className="fa fa-facebook-official" />
                      Login with Facebook<br />
                      coming soon
                    </Link>
                    <Link to="#" className="btn-login-with bg2">
                      <i className="fa fa-google" />
                      Login with Google<br />
                      coming soon
                    </Link>
                  </div>
                  <br />
                  <div className="flex-col-c ">
                    <span className="txt2 p-b-10">
                      <span style={{color: 'white'}}>Don’t have an account?</span>
                    </span>
                    <Link to="/register" className="txt3 bo1 hov1">
                      <span style={{color: 'white'}}>Sign up now</span>
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