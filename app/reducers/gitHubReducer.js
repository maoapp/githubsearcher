// @actiontypes
import {
  REGISTER_USER,
  REPOS_REQUEST,
  REPOS_REQUEST_FAILURE,
  REPOS_REQUEST_SUCESSFUL, 
  LOGOUT
} from '../constants/actionTypes';

const emptyUser = {
  firstName: '',
  lastName: '',
  email: '',
  id: '',
  githubUser: '',
  isLogged: false
}

const initialState = {
  user: emptyUser,
  repos: {
    data: null,
    isFetching: false,
    successful: false,
    failure: false
  }
};

const gitHubReducer = (state = initialState, action) => {
  switch(action.type) {
    case REGISTER_USER: {
      return {
        ...state,
        user: action.payload
      }
    }
    case REPOS_REQUEST: {
      return {
        ...state,
        repos: {
          ...state.repos,
          isFetching: true,
          failure: false
        }
      }
    }
    case REPOS_REQUEST_SUCESSFUL: {
      return {
        ...state,
        repos: {
          ...state.repos,
          data: action.payload,
          isFetching: false,
          failure: false
        }
      }
    }
    case REPOS_REQUEST_FAILURE: {
      return {
        ...state,
        repos: {
          ...state.repos,
          isFetching: false,
          failure: true
        }
      }
    }
    case LOGOUT: {
      return {
        ...state,
        user: emptyUser,
        repos: {
          ...state.repos,
          data: null
        }
        }
    }
    default:
      return state;
  }
};

export default gitHubReducer;
