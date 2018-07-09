import { FETCH_TIMELINE, FETCH_TIMELINES, NEW_TIMELINE, UPDATE_TIMELINE, DELETE_TIMELINE, LOGIN, LOGOUT, FETCH_TIMELINE_DETAILS, UPDATE_TIMELINE_DETAIL,FETCH_TIMELINE_DETAIL,ADD_TIMELINE_DETAIL,DELETE_TIMELINE_DETAIL } from './types'
import axios from 'axios';
import store from  '../store';
import { push } from 'react-router-redux'

export const fetchTimelines = () => dispatch => {
  //thunk middleware allows us to call dispatcher directly
  //let ctoken = localStorage.getItem("token");
  let ctoken = store.getState().auth_token.token;
  console.log('fetch timelines fromn backend')
  console.log('ctoken = ' + ctoken)
    if(ctoken){
      let apiConfig = {
        headers:{Authorization: `Token ` + ctoken}
      };

        axios.get('http://localhost:8000/timelines/',apiConfig)
        .then(response => response.data)
        .then(timelines =>
          dispatch({
          type:FETCH_TIMELINES,
          payload: timelines
        })
      )
      .catch((e) => { console.log(e)});
    };

}

export const createTimeline = (timelineData) => dispatch => {
  console.log('action called, add timeline');
  console.log(timelineData)
  let ctoken = store.getState().auth_token.token;
  if(ctoken){
    let apiConfig = {
      headers:{Authorization: `Token ` + ctoken}
    };
    axios.post('http://localhost:8000/timelines/',timelineData,apiConfig)
    .then(response => response.data)
    .then(timeline =>
      dispatch({
      type:NEW_TIMELINE,
      payload: timeline
    })
  )
  .catch((e) => { console.log(e)});
};
}

export const editTimeline = (timelineData) => dispatch => {
  console.log('action called, add timeline');
  console.log(timelineData)
  let ctoken = store.getState().auth_token.token;
  if(ctoken){
    let apiConfig = {
      headers:{Authorization: `Token ` + ctoken}
    };
    axios.put('http://localhost:8000/timelines/'+timelineData.id+'/',timelineData,apiConfig)
    .then(response => response.data)
    .then(timeline =>
      dispatch({
      type:UPDATE_TIMELINE,
      payload: timeline
    })
  )
  .catch((e) => { console.log(e)});
};
}

export const deleteTimeline = (tid) => dispatch => {
  console.log("delete a timeline");
  let ctoken = store.getState().auth_token.token;
  if(ctoken){
    let apiConfig = {
      headers:{Authorization: `Token ` + ctoken}
    };
    axios.delete('http://localhost:8000/timelines/'+tid+'/',apiConfig)
    .then(response => response.data)
    .then(timeline =>
      dispatch({
      type:DELETE_TIMELINE,
      payload: timeline
    })
  )
  .catch((e) => { console.log(e)});
};
}

export const login = (loginData) => dispatch => {
  console.log("login with passed credentials");

  //get the token and using the passed form credentials
  axios.post('http://localhost:8000/get-token/',loginData)
    .then(response => {
        console.log(response.data.token);
        return response.data.token})
    .then(token =>
      dispatch({
        type:LOGIN,
        payload:token
      //  localStorage.setItem("token", new_token);
        //navigate to the main url
        //this.props.history.push('/')
      })
    )
    .catch(err => console.log(err))


}

export const logout = () => dispatch => {
  console.log('logout');
  //remove the auth token
  dispatch({
    type:LOGOUT,
    payload:''
  })

}

export const fetchTimelineDetails = timelineid => dispatch => {
  console.log("fetch timeline details");
  console.log(timelineid);

    let ctoken = store.getState().auth_token.token;
    let resultsDetails = [];
    let resultcurrentTimeline = {};

    console.log('fetch timelines fromn backend')
    console.log('ctoken = ' + ctoken)
      if(ctoken){
        let apiConfig = {
          headers:{Authorization: `Token ` + ctoken}
        };

          axios.get('http://localhost:8000/timelines/'+timelineid+'/details/',apiConfig)
          .then(response => {resultsDetails = response.data; return resultsDetails;})
          .then(resultsDetails => {
              console.log(FETCH_TIMELINE_DETAILS)
              dispatch({
              type:FETCH_TIMELINE_DETAILS,
              payload: resultsDetails
            });
          }).then(() => {
              console.log("GET  http://localhost:8000/timelines/")
              axios.get('http://localhost:8000/timelines/'+timelineid+'/',apiConfig)
              .then(response2 => {
                console.log("get timeline details")
                console.log(response2)
                resultcurrentTimeline = response2.data;
                return resultcurrentTimeline;
              }
            )
            .then(resultcurrentTimeline => {
              console.log("FETCH_TIMELINE");
              dispatch({
              type:FETCH_TIMELINE,
              payload: resultcurrentTimeline
            });
            }
          )
        })
        .catch((e) => { console.log(e)});
      };

}

export const updateTimelineDetail = (timelinedetaildata) => dispatch => {
  console.log("Update a timeline detail");
  console.log(timelinedetaildata)
  let ctoken = store.getState().auth_token.token;
  if(ctoken){
    let apiConfig = {
      headers:{Authorization: `Token ` + ctoken}
    };
    axios.put('http://localhost:8000/timelines/'+ timelinedetaildata.timeline_id + '/details/' + timelinedetaildata.id + '/',timelinedetaildata,apiConfig)
    .then(response => response.data)
    .then(timelinedetail =>
      dispatch({
      type:UPDATE_TIMELINE_DETAIL,
      payload: timelinedetail
    })
  )
  .catch((e) => { console.log(e)});
};
}
export const deleteTimelineDetail = (timelinedetaildata) => dispatch => {
  console.log("delete a timeline detail");
  let ctoken = store.getState().auth_token.token;
  if(ctoken){
    let apiConfig = {
      headers:{Authorization: `Token ` + ctoken}
    };
    axios.delete('http://localhost:8000/timelines/'+timelinedetaildata.timeline_id+'/details/'+timelinedetaildata.id+'/',apiConfig)
    .then(response => response.data)
    .then(timelinedetail =>
      dispatch({
      type:DELETE_TIMELINE_DETAIL,
      payload: timelinedetail
    })
  )
  .catch((e) => { console.log(e)});
};
}

export const fetchTimelineDetailData = (tid,tdid) => dispatch => {
  console.log("fetch the detail info");
  console.log(tid);
  console.log(tdid);
  let ctoken = store.getState().auth_token.token;
  if(ctoken){
    let apiConfig = {
      headers:{Authorization: `Token ` + ctoken}
    };
    axios.get('http://localhost:8000/timelines/'+ tid + '/details/' + tdid + '/',apiConfig)
    .then(response => response.data)
    .then(timelinedetail =>
      dispatch({
      type:FETCH_TIMELINE_DETAIL,
      payload: timelinedetail
    })
  )
  .catch((e) => { console.log(e)});
};
}

export const createTimelineDetail = (timelinenewdetaildata) => dispatch => {
  console.log("add a new detail to the timeline");
  console.log(timelinenewdetaildata);
  let tid = timelinenewdetaildata.timeline_id
  let ctoken = store.getState().auth_token.token;
  if(ctoken){
    let apiConfig = {
      headers:{Authorization: `Token ` + ctoken}
    };
    axios.post('http://localhost:8000/timelines/'+ tid +'/details/',timelinenewdetaildata,apiConfig)
    .then(response => response.data)
    .then(timeline => {
      dispatch({
      type:ADD_TIMELINE_DETAIL,
      payload: timeline
    });

    //redirect to the edit form page
    let tdid = timeline.id;
    let redirecturl = 'http://localhost:3000/timelines/'+ tid +'/detail/' + tdid;
    console.log(redirecturl);
    store.dispatch(push(redirecturl))
  }
  )
  .catch((e) => { console.log(e)});
};
}
