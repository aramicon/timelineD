import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class TimelineDetail extends Component{
  constructor(props){
    super();
    this.state = {
      detail:props.item
    }
  }

  render(){
    return(
        <li className="collection-item">
        <Link to={`/timelines/${this.state.detail.timeline_id}/detail/${this.state.detail.id}`}> {this.state.detail.title}</Link>
        <div>{this.state.detail.description}</div>
        <div><a href = {this.state.detail.url}>URL</a></div>
        <div>Created: {this.state.detail.date_created}, last modified  {this.state.detail.date_modified}</div>
        </li>
      )
  }
}

export default TimelineDetail
