import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { createTimelineDetail } from '../actions/postActions'
import {bindActionCreators} from 'redux';

class TimelineNewDetailForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:'',
      description:'',
      detail:{}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){
    let timelineId = this.props.match.params.tid
    let timeLineDetailId = this.props.match.params.id
    //this.props.actions.fetchTimelineDetailData(timelineId,timeLineDetailId);

  }


  onChange(e) {
    this.setState({[e.target.name]:e.target.value});
  }

  onSubmit(e){
    e.preventDefault();

    const timelineNewDetail = {
      title: this.state.title,
      description:this.state.description,
      timeline_id: this.props.match.params.tid //get this from the url
    }

    this.props.actions.createTimelineDetail(timelineNewDetail);

  }

  render(){

    return (
      <div>
        <h1>Add New Timeline Detail</h1>
        <form onSubmit = {this.onSubmit}>
        <div>
          <label>Title: </label><br />
          <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
          <label>Description: </label><br />
          <input type="text" name="description" onChange={this.onChange} value={this.state.description}/>
        </div>
        <button type="submit">Submit</button>

        </form>

      </div>
    );
  }
}

TimelineNewDetailForm.propTypes = {
  actions: PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      createTimelineDetail: bindActionCreators(createTimelineDetail, dispatch)
    }
  };
}



export default connect(null, mapDispatchToProps)(TimelineNewDetailForm);
