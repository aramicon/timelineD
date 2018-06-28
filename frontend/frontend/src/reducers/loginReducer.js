import { LOGIN, LOGOUT } from '../actions/types'

const initialState={
  token: ''
}

export default function(state=initialState, action){
  switch(action.type){
    case LOGIN:
      return{
        ...state,
        token:action.payload
      }
    case LOGOUT:
      return{
        ...state,
        token:''
      }
    default:
      return state;
  }
}
