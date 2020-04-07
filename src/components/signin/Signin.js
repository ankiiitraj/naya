import React, { Component } from "react";
import './signin.css'

class Landing extends Component {
  render() {
    return (
      <form className="signin">
          <label>Email</label>
          <input type='text' /> 
          <br />  
          <label>Password</label>
          <input type='password' />
      </form>
    );
  }
}

export default Landing;
