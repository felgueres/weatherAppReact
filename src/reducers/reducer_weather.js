import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action){

  switch(action.type){
    case FETCH_WEATHER:
      // return state.concat({action.payload.data});
      // this line on top is the same as the one below, it's some sugar syntax.
      return [action.payload.data, ...state];
  }

  return state
}
