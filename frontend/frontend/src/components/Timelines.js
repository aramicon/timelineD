import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTimelines } from '../actions/postActions';
import Timeline from './Timeline';


class Timelines extends Component {

  componentDidMount(){
    //console.log("get the timelines (axios call)");
    this.props.fetchTimelines();
  }

  componentWillReceiveProps(nextProps){
    if (Object.keys(nextProps.newTimeline).length > 0 ){
      this.props.timelines.unshift(nextProps.newTimeline);
    }
  }

  render(){
    console.log("display the timelines list for this user")
    console.log(this.props)
    const timelineItems = this.props.timelines.map(timeline => (
      <Timeline key={timeline.id} item = { timeline }/>
    ));

    return (
      <div>
        <h1>Timelines</h1>
        {timelineItems}
      </div>
    );
  }
}

Timelines.propTypes = {
  fetchTimelines: PropTypes.func.isRequired,
  timelines: PropTypes.array.isRequired,
  newTimeline:PropTypes.object
}

const mapStateToProps = state => ({
  timelines: state.timelines.items,
  newTimeline:state.timelines.item
})

export default connect(mapStateToProps,{ fetchTimelines })(Timelines);
