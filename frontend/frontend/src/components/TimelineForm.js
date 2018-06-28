import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { createTimeline } from '../actions/postActions'

class TimelineForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]:e.target.value});
  }

  onSubmit(e){
    e.preventDefault();

    const timeline = {
      name: this.state.name
    }

    this.props.createTimeline(timeline);

  }

  render(){

    return (
      <div>
        <h1>Add Timeline</h1>
        <form onSubmit = {this.onSubmit}>
        <div>
          <label>Name: </label><br />
          <input type="text" name="name" onChange={this.onChange} value={this.state.name}/>
        </div>
        <button type="submit">Submit</button>

        </form>

      </div>
    );
  }
}

TimelineForm.propTypes = {
  createTimeline: PropTypes.func.isRequired
};

export default connect(null, { createTimeline })(TimelineForm);
