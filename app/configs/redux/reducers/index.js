import * as types from '../actionTypes';
import globalStates from '../states';

export default function globalReducer(state = globalStates, action) {
  switch (action.type) {
    case types.GET_IMAGES:
      return {
        ...state,
        images: state.images,
        error: ''
      };
    case types.SET_IMAGES:
      return{
        ...state,
        images:[...state.images, action.payload],
        error:''
      }
    case types.ERROR_GETTING_IMAGES:
      return {
        ...state,
        images: [],
        error: action.error
      };
    // case types.RESET_HOME:
    //   return {
    //     images: [],
    //     error: ''
    //   };
    default:
      return state;
  }
}
