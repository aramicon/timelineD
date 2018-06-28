import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { logout } from '../actions/postActions'


class Navbar extends Component{

  handleLogout(e){
    //log out the user by removing the auth token
    console.log('remove the token in local storage');
    //localStorage.removeItem("token", null);
    //this.props.history.push('/')
    this.props.logout();
  }

  render(){
    const  currentAuthToken  = this.props.auth.token;
    const userLinks = (  <ul className="right hide-on-small-only">
        <li><Link to="/"><i className="fa fa-users"></i> Timelines</Link></li>
        <li><Link to="/timelines/add"><i className="fa fa-plus"></i> Add Timeline</Link></li>
        <li><Link to="/about"><i className="fa fa-users"></i> About</Link></li>
        <li><a href="#" onClick={this.handleLogout.bind(this)}><i className="fa fa-users"></i> Logout</a></li>
      </ul>);
    const guestLinks = (  <ul className="right hide-on-small-only">
        <li><Link to="/about"><i className="fa fa-users"></i> About</Link></li>
        <li><Link to="/login"><i className="fa fa-users"></i> Login</Link></li>
      </ul>);

    return(
        <div>
          <nav className="blue darken-3">
            <div className="nav-wrapper">

            { currentAuthToken ? userLinks : guestLinks }

            </div>
          </nav>
        </div>
    )
  }
}

Navbar.propTypes = {
  auth: PropTypes.object.isRequired
}

function mapStateToProps(state){
  return {
    auth:state.auth_token
  };
}

export default connect(mapStateToProps, { logout } )(Navbar);
