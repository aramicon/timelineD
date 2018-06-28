import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchTimelines } from '../actions/postActions'


class Timelines extends Component {

  componentWillMount(){
    this.props.fetchTimelines();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.newTimeline){
      this.props.timelines.unshift(nextProps.newTimeline);
    }
  }

  render(){
    console.log(this.props)
    const timelineItems = this.props.timelines.map(timeline => (
      <div key={timeline.id}>
        <h3>{timeline.name}</h3>
        <p>{timeline.date_created}</p>
      </div>
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
