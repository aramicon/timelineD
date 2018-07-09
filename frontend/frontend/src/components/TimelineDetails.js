import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTimelineDetails } from '../actions/postActions'
import TimelineDetail from './TimelineDetail';
import TimelineEditForm from './TimelineEditForm';
import TimelineDelete from './TimelineDelete';

class TimeLineDetails extends Component{
  constructor(props){
    super();

  }

  componentDidMount(){
    let timeLineDetailId = this.props.match.params.id
    this.props.fetchTimelineDetails(timeLineDetailId);
  }

  render(){
    const timelineDetails = this.props.details.map(detail => (
      <TimelineDetail key={detail.id} item = { detail }/>
   ));

   const currentTimeline = <h2> { this.props.currentTimeline.name } </h2>

    return(
      <div>
          <div>
          { currentTimeline }
          </div>
          <div>
          { timelineDetails }
          </div>
          <div>
              <Link to={`/timelines/${this.props.match.params.id}/add`}> ADD NEW DETAIL</Link>
          </div>
          <div>
           <TimelineEditForm currentTimeline = {this.props.currentTimeline} />
          </div>
          <div>
           <TimelineDelete currentTimeline = {this.props.currentTimeline} />
          </div>
        </div>
      )
    }
  }

  TimeLineDetails.propTypes = {
    fetchTimelineDetails: PropTypes.func.isRequired,
    details: PropTypes.array.isRequired,
    newDetail:PropTypes.object,
    currentTimeline:PropTypes.object
  };

  const mapStateToProps = state => ({
    details: state.timelineDetails.details,
    newDetail:state.timelineDetails.detail,
    currentTimeline:state.timelines.currentTimeline
  })

export default connect(mapStateToProps,{ fetchTimelineDetails })(TimeLineDetails);
