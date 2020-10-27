import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import "./views/frontpage/germinate/css/bootstrap.css";
import "./views/frontpage/germinate/css/style.css"; 
import "./views/frontpage/germinate/css/mislider.css";
import "./views/frontpage/germinate/css/font-awesome.css";
import "./views/frontpage/germinate/css/mislider-custom.css";
import Index from "./views/frontpage/index";
import Shop from "./views/frontpage/shop";
import Contact from "./views/frontpage/contact";
import Signup from "./views/users/signup";
import Login from "./views/users/login";
import Dashboard from "./views/frontpage/loggedin";
import Drugs from "./views/drugs/viewdrugs";
import Cart from "./views/frontpage/cart";
import AddDrugs from "./views/drugs/adddrugs";
import EditDrugs from "./views/drugs/editdrugs";
import Stock from "./views/stock/viewstock";
import AddStock from "./views/stock/addstock";
import EditStock from "./views/stock/editstock";
import Employees from "./views/employees/viewemployees";
import AddEmployees from "./views/employees/addemployees";
import EditEmployees from "./views/employees/editemployees";
import Hcemployees from "./views/hcemployees/viewhcemployees";
import AddHcemployees from "./views/hcemployees/addhcemployees";
import EditHcemployees from "./views/hcemployees/edithcemployees";
import Orders from "./views/orders/vieworders";
import AddOrders from "./views/orders/addorders";
import EditOrders from "./views/orders/editorders";
import Customers from "./views/customers/viewcustomers";
import AddCustomers from "./views/customers/addcustomers";
import EditCustomers from "./views/customers/editcustomers";
import {BrowserRouter as  Router, Route, Switch} from "react-router-dom";

export default  class App extends Component
{
  render()
  {
    return(
      <div className="">
        {
          <Router>
          <Switch>
            <Route exact path="/" component={Index}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Signup}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/shop" component={Shop}></Route>
            <Route path="/cart/:id/:price/:pharm_id/:name" component={Cart}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route path="/viewdrugs" component={Drugs}></Route>
            <Route path="/adddrugs" component={AddDrugs}></Route>
            <Route path="/editdrugs" component={EditDrugs}></Route>
            <Route path="/viewstock" component={Stock}></Route>
            <Route path="/addstock" component={AddStock}></Route>
            <Route path="/editstock" component={EditStock}></Route>
            <Route path="/viewemployees" component={Employees}></Route>
            <Route path="/addemployees" component={AddEmployees}></Route>
            <Route path="/editemployees" component={EditEmployees}></Route>
            <Route path="/viewhcemployees" component={Hcemployees}></Route>
            <Route path="/addhcemployees" component={AddHcemployees}></Route>
            <Route path="/edithcemployees" component={EditHcemployees}></Route>
            <Route path="/vieworders" component={Orders}></Route>
            <Route path="/addorders" component={AddOrders}></Route>
            <Route path="/editorders" component={EditOrders}></Route>
            <Route path="/viewcustomers" component={Customers}></Route>
            <Route path="/addcustomers" component={AddCustomers}></Route>
            <Route path="/editcustomers" component={EditCustomers}></Route>
          </Switch>
          </Router>
        }
      </div>
      );
  }
}
