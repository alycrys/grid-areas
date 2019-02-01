import { RECEIVE_DATA } from "../actions/list";

export default function(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return {
        ...state,
        ...action.list,
      };
    default:
      return state;
  }
}
