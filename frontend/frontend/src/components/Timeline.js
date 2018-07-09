import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Timeline extends Component{
  constructor(props){
    super();
    this.state = {
      item:props.item
    }
  }

  render(){
    return(
        <li className="collection-item">
        <Link to={`/timelines/${this.state.item.id}`}> {this.state.item.name}</Link>
        </li>
      )
  }
}

export default Timeline
