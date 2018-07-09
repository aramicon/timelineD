import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { updateTimelineDetail } from '../actions/postActions'
import { fetchTimelineDetailData } from '../actions/postActions'
import {bindActionCreators} from 'redux';
import TimelineDetailDelete from './TimelineDetailDelete'

class TimelineDetailForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:'',
      description:'',
      url:'',
      detail:{}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){
    let timelineId = this.props.match.params.tid
    let timeLineDetailId = this.props.match.params.id
    this.props.actions.fetchTimelineDetailData(timelineId,timeLineDetailId);

  }

  componentWillReceiveProps(nextProps){
    //console.log("componentWillReceiveProps");
    //console.log(nextProps);

    if (this.state.title == '' && nextProps.detail.title){
      this.setState({title: nextProps.detail.title});
    }
    if (this.state.description == '' && nextProps.detail.description){
      this.setState({description: nextProps.detail.description});
    }
    if (this.state.url == '' && nextProps.detail.url){
      this.setState({url: nextProps.detail.url});
    }
  }


  onChange(e) {
    this.setState({[e.target.name]:e.target.value});
  }

  onSubmit(e){
    e.preventDefault();

    const timelineDetail = {
      id: this.props.match.params.id, //get this from the url
      title: this.state.title,
      description:this.state.description,
      url:this.state.url,
      timeline_id: this.props.match.params.tid //get this from the url
    }

    this.props.actions.updateTimelineDetail(timelineDetail);

  }

  render(){
    const timelineDetailIds = {
      id:this.props.match.params.id,
      timeline_id:this.props.match.params.tid
    };

    return (
      <div>
        <h1>Edit Timeline Detail</h1>
        <form onSubmit = {this.onSubmit}>
        <div>
          <label>Title: </label><br />
          <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
          <label>Description: </label><br />
          <input type="text" name="description" onChange={this.onChange} value={this.state.description}/>
          <label>URL: </label><br />
          <input type="text" name="url" onChange={this.onChange} value={this.state.url}/>
        </div>
        <button type="submit">Submit</button>

        </form>
        <hr />

        <TimelineDetailDelete timelinedetail = {timelineDetailIds} />
      </div>
    );
  }
}

TimelineDetailForm.propTypes = {
  actions: PropTypes.object
};

const mapStateToProps = state => ({
  detail: state.timelineDetails.detail
})

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      updateTimelineDetail: bindActionCreators(updateTimelineDetail, dispatch),
      fetchTimelineDetailData: bindActionCreators(fetchTimelineDetailData, dispatch)
    }
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(TimelineDetailForm);
