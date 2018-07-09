import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { deleteTimelineDetail } from '../actions/postActions'

class TimelineDetailDelete extends Component {
  constructor(props){
    super(props);
    this.deleteTimelineDetailNow = this.deleteTimelineDetailNow.bind(this);
  }

  deleteTimelineDetailNow(e){
    e.preventDefault();
    const timelinedetail = {
      id:this.props.timelinedetail.id,
      timeline_id:this.props.timelinedetail.timeline_id
    }
    if (timelinedetail.id){
      this.props.deleteTimelineDetail(timelinedetail);
    }
  }
  render(){
    return (
      <div>

        <button onClick = {this.deleteTimelineDetailNow}>
          DELETE
        </button>

      </div>
    );
  }
}

TimelineDetailDelete.propTypes = {
  deleteTimelineDetail: PropTypes.func.isRequired
};

export default connect(null, { deleteTimelineDetail })(TimelineDetailDelete);
