import React, { Component } from 'react';
import {Link} from 'react-router-dom';

var Navbar = () =>{
	return(
		<div className="container-fluid">
		<div className="row">
		<div className="col-sm-12 col-xs-12 col-md-12" style={{padding:0}}>  
		<nav className="navbar navbar-expand-sm bg-light navbar-light">
		  <ul className="navbar-nav">
		    <li className="nav-item ">
		      <Link className="nav-link" to="/">Home</Link> 
		    </li>
		    <li className="nav-item">
		      <Link className="nav-link" to="/panel">Panel</Link>
		    </li>
		    <li className="nav-item">
		      <Link className="nav-link" to="/lazyLoading">Lazy Loading</Link>
		    </li>
		    <li className="nav-item">
		      <Link className="nav-link" to="/formSubmit">Form Submit</Link>
		    </li>  
		    <li className="nav-item">
		      <Link className="nav-link" to="/hooks">Hooks</Link>
		    </li>  
		     
		  </ul>
		</nav>
		</div>
		</div>
		</div>
 	)
}
 
export default Navbar;