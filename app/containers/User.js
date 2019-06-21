import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions/githubRepos';

import UserScreen from '../screens/UserScreen';

const mapStateToProps = ({ gitHubReducer }) => {
	return {
    user: gitHubReducer.user,
    repos: gitHubReducer.repos
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(Actions, dispatch);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserScreen);
