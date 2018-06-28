import { FETCH_TIMELINES, NEW_TIMELINE} from '../actions/types'

const initialState={
  items: [],
  item: {}
}

export default function(state=initialState, action){
  switch(action.type){
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
    default:
      return state;
  }
}
