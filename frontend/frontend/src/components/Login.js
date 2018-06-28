import React, { Component } from 'react';
import { login } from '../actions/postActions'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

class Login extends Component{
  constructor(props){
    super(props);

    this.state = {
      email:"",
      password:""
    };
  }

  validateForm(){
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]:event.target.value
    });
  }

  handleSubmit(e){
      //try to get the auth token from the server
    let credentialsP = {
      username:this.refs.email.value,
      password:this.refs.password.value
    }
    //try to get an authy token from the backend by calling the action
    this.props.login(credentialsP);
    e.preventDefault();
  }



  render() {
    return (<div className ="login" >
      <form onSubmit = {this.handleSubmit.bind(this)}>
      <div className="input-field">
        <input type="text" name="email" ref="email" />
        <label htmlFor="email">Email: </label>
      </div>
      <div className="input-field">
        <input type="password" name="password" ref="password" />
        <label htmlFor="password">Password: </label>
      </div>
        <input type="submit" value="save" className="btn"/>
      </form>
    </div>
  )
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired
};


export default connect(null, { login })(Login);
