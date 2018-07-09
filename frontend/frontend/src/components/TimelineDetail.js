import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Time from 'react-time';

class TimelineDetail extends Component{
  constructor(props){
    super();
    this.state = {
      detail:props.item
    }
  }

  render(){
    console.log("Date.now()");
    console.log(Date.now());
    let now = new Date()
    return(
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <h4>
            {new Intl.DateTimeFormat('en-GB', {
             year: 'numeric',
             month: 'long',
             day: '2-digit'
           }).format(Date.now())}
           </h4>

            <h4>{this.state.detail.tdate}</h4>
            <h4>{this.state.detail.title} </h4>

          <p>Today is <Time value={now} format="YYYY/MM/DD" /></p>

          {this.state.detail.description}

          </div>



        <div class="card-action">
          <a href = {this.state.detail.url}>URL</a>
          <Link to={`/timelines/${this.state.detail.timeline_id}/detail/${this.state.detail.id}`}> <i className="fa fa-edit"></i> </Link>
        </div>

        </div>
      )
  }
}

export default TimelineDetail
