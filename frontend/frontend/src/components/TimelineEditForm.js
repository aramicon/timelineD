import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { editTimeline } from '../actions/postActions'

class TimelineEditForm extends Component {
  constructor(props){
    super(props);
    console.log("TimelineEditForm constructor: can I see the props?");
    console.log(this.props.currentTimeline);
    this.state = {
      name:''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps){
    console.log(" TimelineEditForm componentWillReceiveProps");
    console.log(nextProps);

    if (this.state.name == '' && nextProps.currentTimeline.name){
      console.log("update name");
      this.setState({name: nextProps.currentTimeline.name});
    }
  }

  onChange(e) {
    this.setState({[e.target.name]:e.target.value});
  }

  onSubmit(e){
    e.preventDefault();

    const timeline = {
      id: this.props.currentTimeline.id,
      name: this.state.name
    }

    if (timeline.id){
      this.props.editTimeline(timeline);
    }


  }

  render(){

    return (
      <div>
        <h2>Edit Timeline</h2>
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

TimelineEditForm.propTypes = {
  editTimeline: PropTypes.func.isRequired
};

export default connect(null, { editTimeline })(TimelineEditForm);
