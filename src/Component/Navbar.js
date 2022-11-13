import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg bg-light">
            <div class="container">
              <a class="navbar-brand" href="#"><img src=".\Images\logo.png"alt="#"/></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul style={{paddingLeft:"40%",color:"black",fontFamily:"font-family: 'Lobster', cursive;"}} class="navbar-nav">
                  <li class="nav-item">
                    <Link class="nav-link" to="/">Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/About">About Us</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/Product">Product List</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/Productd">Product development</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/ContactUs">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          

        );
    }
}
export default Navbar; 