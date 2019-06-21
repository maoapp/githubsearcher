// @vendors
import axios from 'axios';

// @actiontypes
import {
  REGISTER_USER,
  REPOS_REQUEST,
  REPOS_REQUEST_FAILURE,
  REPOS_REQUEST_SUCESSFUL,
  LOGOUT
} from '../constants/actionTypes';

//@constants
import { API_URL } from '../constants/constants';

const signup = user => dispatch => {
  dispatch({
    type: REGISTER_USER,
    payload: user
  })
};

const featchRepos = userName => dispatch => {
  const url = `${API_URL}/${userName}/repos`;

  dispatch(reposRequest());
  axios.get(url)
    .then(res => {
      dispatch(reposRequestSuccesful(res.data));
    })
    .catch(() => dispatch(reposRequestFailure()))
};

const reposRequestFailure = () => ({
	type: REPOS_REQUEST_FAILURE
});

const reposRequest = () => ({
	type: REPOS_REQUEST
});

const reposRequestSuccesful = (data, list) => ({
  type: REPOS_REQUEST_SUCESSFUL,
  payload: data,
  list
});

const logOut = () => ({
  type: LOGOUT
});

export {
  featchRepos,
  logOut,
  signup
}
