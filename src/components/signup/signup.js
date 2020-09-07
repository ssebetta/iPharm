import React, { Component } from "react";
import {Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import "./signup.css";
import { Link } from "react-router-dom";

export default class Signup extends Component {
	userData;
	constructor(props)
	{
		super(props);
		this.state ={
			signupData:{
				name: "",
				email: "",
				phone: "",
				password: "",
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
			.post("http://localhost:8000/api/user_signup", this.state.signupData)
			.then((response) => {
				this.setState({isLoading:false});
				if (response.data.status === 200) 
				{
					this.setState(
					{
						msg:response.data.message,
						signupData:{
							name: "",
							email: "",
							phone: "",
							password: "",
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
	render()
	{
		const isLoading =this.state.isLoading;
		return(
			<div>
				<Form className="containers shadow" >
					<FormGroup>
						<Label for="name"> Name</Label>
						<Input 
							type="name" 
							name="name" 
							placeholder="Enter Name" 
							value={this.state.signupData.name}
							onChange={this.onChangeHandler}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="email"> Email Address</Label>
						<Input 
							type="email" 
							name="email" 
							placeholder="Enter Your Email" 
							value={this.state.signupData.email}
							onChange={this.onChangeHandler}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="phone"> Phone Number</Label>
						<Input 
							type="phone" 
							name="phone" 
							placeholder="Enter Your phone" 
							value={this.state.signupData.phone}
							onChange={this.onChangeHandler}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="password"> Password</Label>
						<Input 
							type="password" 
							name="password" 
							placeholder="Enter Your password" 
							value={this.state.signupData.password}
							onChange={this.onChangeHandler}
						/>
					</FormGroup>
					<p className="text-white">{this.state.msg}</p>
					<Button 
						className="text-center mb-4" 
						color="success" 
						onClick={this.onSubmitHandler}
					>
						Sign Up
						{isLoading ? (
							<span
							className="spinner-border spinner-border-sm ml-5"
							role="status"
							aria-hidden="true"
							></span>
							) : (<span></span>)
						}
					</Button>
					<Link to="login" className="text-white ml-5">I'm Already A member</Link>
				</Form>
			</div>
			);
	}
}

