import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";
import { Redirect, Router,Link } from "react-router-dom";

export default class Home extends Component {
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
			return <Redirect to="/" push={true} />;
		}
		return(
			<div className="container  border">
		        <h3> HomePage</h3>
		        <div className="row">
		          <div className="col-xl-9 col-sm-12 col-md-9 text-dark">
		            <h5> Welcome, to your Dashboard {user.first_name} </h5>
		          </div>
		          
		        </div>
		        <div className="clear-fix"></div>
		        <div className="row">
		          <div className="col-xl-3 col-sm-12 col-md-3">
		          <Link to="/viewstudents">
		            <Button
					className="btn btn-info text-right"
					type="button"
					> 
						Students
					</Button>
					</Link>
		          </div>
		          <div className="col-xl-3 col-sm-12 col-md-3">
		          <Link to="/viewteachers">
		            <Button
					className="btn text-right"
					type="button"
					colors="tertiary"
					> 
						Teachers
					</Button>
					</Link>
		          </div>
		          <div className="col-xl-3 col-sm-12 col-md-3">
		            <Button
		              className="btn btn-danger text-right"
		              onClick={this.onLogoutHandler}
		            >
		              Logout
		            </Button>
		          </div>
		        </div>
		     </div>
			);
	}
}

