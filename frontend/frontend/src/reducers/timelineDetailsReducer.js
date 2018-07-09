import { FETCH_TIMELINE_DETAILS,FETCH_TIMELINE_DETAIL, ADD_TIMELINE_DETAIL,UPDATE_TIMELINE_DETAIL,DELETE_TIMELINE_DETAIL } from '../actions/types'

const initialState={
  details: [],
  detail: {}
}

export default function(state=initialState, action){
  switch(action.type){
    case FETCH_TIMELINE_DETAILS:
      return {
        ...state,
        details:action.payload
      };
    case FETCH_TIMELINE_DETAIL:
        return {
          ...state,
          detail:action.payload
        };
    case UPDATE_TIMELINE_DETAIL:
          return {
            ...state,
            detail:action.payload
          }
    case DELETE_TIMELINE_DETAIL:
          return {
            ...state,
            detail:action.payload
          }
    case ADD_TIMELINE_DETAIL:
        return {
          ...state,
          detail:action.payload
        }
    default:
      return state;
  }
}
