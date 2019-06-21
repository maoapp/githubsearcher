import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions/githubRepos';

import SignupScreen from '../screens/SignupScreen';

const mapStateToProps = ({ gitHubReducer }) => {
	return {
    user: gitHubReducer.user
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(Actions, dispatch);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignupScreen);
