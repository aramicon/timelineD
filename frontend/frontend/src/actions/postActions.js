import { FETCH_TIMELINES, NEW_TIMELINE, LOGIN, LOGOUT } from './types'
import axios from 'axios';
import store from  '../store';

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
  /*  axios({
      method:'post',
      url:'http://localhost:8000/timelines/',
      data: timelineData,
      config:apiConfig
    })*/
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
