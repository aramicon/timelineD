import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { deleteTimeline } from '../actions/postActions'

class TimelineDelete extends Component {
  constructor(props){
    super(props);
    this.deleteTimelineNow = this.deleteTimelineNow.bind(this);
  }

  deleteTimelineNow(e){
    e.preventDefault();
    if (this.props.currentTimeline.id){
      this.props.deleteTimeline(this.props.currentTimeline.id);
    }
  }
  render(){
    return (
      <div>

        <button onClick = {this.deleteTimelineNow}>
          DELETE
        </button>

      </div>
    );
  }
}

TimelineDelete.propTypes = {
  editTimeline: PropTypes.func.isRequired
};

export default connect(null, { deleteTimeline })(TimelineDelete);
