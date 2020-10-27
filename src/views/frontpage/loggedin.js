import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";
import { Redirect, Router,Link } from "react-router-dom";

export default class Dashboard extends Component {
  state = {
    navigate:false
  };

  onLogoutHandler = () =>{
    localStorage.clear();
    this.setState({
      navigate:true
    });
  };
  render()
  {
    const user =JSON.parse(localStorage.getItem("userData"));
    const { navigate }=this.state;
    if (navigate) 
    {
      return <Redirect to="/login" push={true} />;
    }
    return(
      <div className="">
        <div className="" style={{backgroundColor:"#cc3366"}}>
          <div className="w3_agile_logo">
              <h1><Link to="/"><span style={{color:'white'}}>i</span>Dagala</Link></h1>
            </div>
          <div className="agile_social_icons_banner">
            <ul className="agileits_social_list">
              <li><Link to="/shop" className="w3_agile_dribble"><i className="fa fa-dribbble" aria-hidden="true" /> Drug Shop</Link></li>
              <li><Link to="/dashboard" className="w3_agile_dribble"><i className="fa fa-dribbble" aria-hidden="true" /> Dashboard</Link></li>
              <li><Link to="/profile" className="w3_agile_dribble"><i className="fa fa-user" aria-hidden="true" /> Profile</Link></li>
              <li><Button className="text-center" style={{backgroundColor:'transparent'}} onClick={this.onLogoutHandler}>
                <span className="fa fa-sign-out"></span> Logout</Button>
              </li>
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
                    <li><Button className="btn text-center" onClick={this.onLogoutHandler}>
                      Logout</Button>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="row" style={{padding:'5px'}}>
          <div className="col-xl-9 col-sm-12 col-md-9 text-dark">
            <h5> Welcome, to your Dashboard {user.first_name} </h5>
          </div>
          
        </div>
        <div className="clear-fix"></div>
        <div className="row">
          <div className="col-xl-3 col-sm-12 col-md-3"  style={{height:'150px', padding:'5px'}}>
            <Link to="/vieworders">
              <Button
            className="btn btn-info text-center"
            style={{width:'100%', height:'100%'}}
            type="button"
            > 
            <span className="fa fa-shopping-cart" style={{fontSize:'50px'}}></span><br/>
              <span>Orders</span>
            </Button>
            </Link>
          </div>
          <div className="col-xl-3 col-sm-12 col-md-3" style={{height:'150px', padding:'5px'}}>
            <Link to="/viewdrugs">
              <Button
            className="btn btn-info text-center"
            style={{width:'100%', height:'100%'}}
            type="button"
            > 
            <span className="fa fa-medkit" style={{fontSize:'50px'}}></span><br/>
              Drugs
            </Button>
            </Link>
          </div>
          <div className="col-xl-3 col-sm-12 col-md-3" style={{height:'150px', padding:'5px'}}>
            <Link to="/viewstock">
              <Button
            className="btn btn-info text-center"
            style={{width:'100%', height:'100%'}}
            type="button"
            > 
            <span className="fa fa-medkit" style={{fontSize:'50px'}}></span><br/>
              Stock
            </Button>
            </Link>
          </div>
          <div className="col-xl-3 col-sm-12 col-md-3" style={{height:'150px', padding:'5px'}}>
            <Link to="/viewemployees">
              <Button
            className="btn btn-info text-center"
            style={{width:'100%', height:'100%'}}
            type="button"
            > 
            <span className="fa fa-users" style={{fontSize:'50px'}}></span><br/>
              Employees
            </Button>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-sm-12 col-md-3" style={{height:'150px', padding:'5px'}}>
            <Link to="/viewhcemployees">
              <Button
            className="btn btn-info text-center"
            style={{width:'100%', height:'100%'}}
            type="button"
            > 
            <span className="fa fa-users" style={{fontSize:'50px'}}></span><br/>
              Employees
            </Button>
            </Link>
          </div>
          <div className="col-xl-3 col-sm-12 col-md-3" style={{height:'150px', padding:'5px'}}>
            <Link to="/viewcustomers">
              <Button
            className="btn btn-info text-center"
            style={{width:'100%', height:'100%'}}
            type="button"
            > 
            <span className="fa fa-truck" style={{fontSize:'50px'}}></span><br/>
              Customers
            </Button>
            </Link>
          </div>
          <div className="col-xl-3 col-sm-12 col-md-3" style={{height:'150px', padding:'5px'}}>
            <Link to="/viewfavorites">
              <Button
            className="btn btn-info text-center"
            style={{width:'100%', height:'100%'}}
            type="button"
            > 
              <span className="fa fa-thumbs-o-up" style={{fontSize:'50px'}}></span><br/>
              Favorite Sellers
            </Button>
            </Link>
          </div>
          <div className="col-xl-3 col-sm-12 col-md-3" style={{height:'150px', padding:'5px'}}>
            <Link to="/viewprofile">
              <Button
            className="btn btn-info text-center"
            style={{width:'100%', height:'100%'}}
            type="button"
            > 
            <span className="fa fa-address-card" style={{fontSize:'50px'}}></span><br/>
              Profile
            </Button>
            </Link>
          </div>
        </div></div>
      );
  }
}

