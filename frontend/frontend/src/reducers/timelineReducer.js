import { FETCH_TIMELINE,FETCH_TIMELINES, NEW_TIMELINE,UPDATE_TIMELINE,DELETE_TIMELINE} from '../actions/types'

const initialState={
  items: [],
  item: {},
  currentTimeline:{}
}

export default function(state=initialState, action){
  switch(action.type){
    case FETCH_TIMELINE:
      return {
        ...state,
        currentTimeline:action.payload
      };
    case FETCH_TIMELINES:
      return {
        ...state,
        items:action.payload
      };
    case NEW_TIMELINE:
        return {
          ...state,
          item:action.payload
        }
    case UPDATE_TIMELINE:
        return {
          ...state,
          currentTimeline:action.payload
        }
    case DELETE_TIMELINE:
        return {
          ...state,
          currentTimeline:{}
        }
    default:
      return state;
  }
}
