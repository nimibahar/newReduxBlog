import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';


export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload);
    case FETCH_POST:
      // const post = action.payload.data;
      // const newState = { ...state };
      // newState[post.id] = post;           assign to the key: id prop on the post object, the post obeject
      // return newState;

      return { ...state, [action.payload.data.id]: action.payload.data} //es6 key interpolation
    case FETCH_POSTS:
      return _.mapKeys((action.payload.data), 'id');
    default:
      return state;
  }
}
